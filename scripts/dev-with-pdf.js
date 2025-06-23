const { spawn } = require('child_process');
const { generatePDF } = require('./generate-pdf');
const { startWatcher } = require('./watch-and-generate');

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

async function waitForServer(maxAttempts = 30) {
  console.log('⏳ Waiting for development server to start...');
  
  for (let i = 0; i < maxAttempts; i++) {
    const isRunning = await checkServer();
    if (isRunning) {
      console.log('✅ Development server is ready!');
      return true;
    }
    
    console.log(`🔄 Attempt ${i + 1}/${maxAttempts} - Server not ready yet...`);
    await sleep(2000); // Wait 2 seconds between attempts
  }
  
  console.log('❌ Server failed to start within expected time');
  return false;
}

async function main() {
  console.log('🚀 Starting development server with auto PDF generation...');
  
  // Start the development server
  const devProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  let watcher = null;
  
  // Wait for server to be ready
  const serverReady = await waitForServer();
  
  if (serverReady) {
    console.log('📄 Generating initial PDF...');
    try {
      await generatePDF();
      console.log('🎉 Initial PDF generated successfully!');

      // Start file watcher for auto-regeneration
      watcher = startWatcher();

    } catch (error) {
      console.error('❌ Failed to generate initial PDF:', error.message);
    }
  } else {
    console.log('❌ Could not generate PDF - server not ready');
  }

  // Keep the process running
  console.log('🔄 Watching for changes... Press Ctrl+C to stop.');

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down...');
    if (watcher) {
      watcher.close();
    }
    devProcess.kill();
    process.exit(0);
  });
}

main().catch(console.error);
