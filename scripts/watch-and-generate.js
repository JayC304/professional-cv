const chokidar = require('chokidar');
const { generatePDF } = require('./generate-pdf');
const path = require('path');

let isGenerating = false;
let pendingGeneration = false;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkServer() {
  try {
    const response = await fetch('http://localhost:3001');
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function generatePDFWithDebounce() {
  if (isGenerating) {
    pendingGeneration = true;
    return;
  }
  
  isGenerating = true;
  
  try {
    // Wait a bit for the server to compile changes
    await sleep(3000);
    
    // Check if server is still running
    const serverRunning = await checkServer();
    if (!serverRunning) {
      console.log('⚠️ Server not running, skipping PDF generation');
      return;
    }
    
    console.log('🔄 File changed, regenerating PDF...');
    await generatePDF();
    
    // If there was a pending generation, do it now
    if (pendingGeneration) {
      pendingGeneration = false;
      setTimeout(() => generatePDFWithDebounce(), 1000);
    }
    
  } catch (error) {
    console.error('❌ Error regenerating PDF:', error.message);
  } finally {
    isGenerating = false;
  }
}

function startWatcher() {
  console.log('👀 Starting file watcher...');
  
  // Watch for changes in app, components, and other relevant directories
  const watcher = chokidar.watch([
    'app/**/*.{tsx,ts,jsx,js,css}',
    'components/**/*.{tsx,ts,jsx,js}',
    'public/**/*',
    'styles/**/*.css'
  ], {
    ignored: [
      '**/node_modules/**',
      '**/output/**',
      '**/.next/**',
      '**/scripts/**'
    ],
    persistent: true,
    ignoreInitial: true
  });
  
  watcher.on('change', (filePath) => {
    console.log(`📝 File changed: ${path.relative(process.cwd(), filePath)}`);
    generatePDFWithDebounce();
  });
  
  watcher.on('add', (filePath) => {
    console.log(`➕ File added: ${path.relative(process.cwd(), filePath)}`);
    generatePDFWithDebounce();
  });
  
  watcher.on('unlink', (filePath) => {
    console.log(`➖ File removed: ${path.relative(process.cwd(), filePath)}`);
    generatePDFWithDebounce();
  });
  
  console.log('✅ File watcher started successfully!');
  console.log('💡 PDF will be regenerated automatically when files change.');
  
  return watcher;
}

module.exports = { startWatcher };
