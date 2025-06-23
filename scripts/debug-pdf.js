const puppeteer = require('puppeteer');

async function debugPDF() {
  console.log('🔍 Starting PDF debug...');
  
  const browser = await puppeteer.launch({
    headless: false, // Show browser for debugging
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop rendering
    await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 1
    });
    
    console.log('📄 Loading CV page...');
    
    // Navigate to the CV page
    await page.goto('http://localhost:3001', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForSelector('#cv-container', { timeout: 10000 });
    
    // Check what content is visible
    const content = await page.evaluate(() => {
      const container = document.querySelector('#cv-container');
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('header');
      
      return {
        containerExists: !!container,
        containerHeight: container ? container.offsetHeight : 0,
        sectionsCount: sections.length,
        headerExists: !!header,
        bodyHeight: document.body.scrollHeight,
        visibleText: document.body.innerText.substring(0, 500)
      };
    });
    
    console.log('📊 Content analysis:', content);
    
    // Wait for user to check the page
    console.log('🔍 Browser opened for inspection. Check the page and press Enter to continue...');
    await new Promise(resolve => {
      process.stdin.once('data', () => resolve());
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

// Check if server is running
async function checkServer() {
  try {
    const response = await fetch('http://localhost:3001');
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function main() {
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Development server is not running on http://localhost:3001');
    console.log('💡 Please start the server first with: npm run dev');
    process.exit(1);
  }
  
  await debugPDF();
}

main().catch(console.error);
