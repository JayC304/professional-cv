const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateScreenshotPDF() {
  console.log('🚀 Starting screenshot-based PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });
    
    console.log('📄 Loading CV page...');
    
    // Navigate to the CV page
    await page.goto('http://localhost:3001', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForSelector('#cv-container', { timeout: 10000 });
    await page.waitForSelector('section', { timeout: 5000 });
    
    // Wait for images and fonts to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get the full height of the content
    const dimensions = await page.evaluate(() => {
      const container = document.querySelector('#cv-container');
      return {
        width: container.scrollWidth,
        height: container.scrollHeight,
        deviceScaleFactor: window.devicePixelRatio || 1
      };
    });
    
    console.log(`📏 Content dimensions: ${dimensions.width}x${dimensions.height}px`);
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Generate timestamp for filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `Tran_Tien_Anh_CV_Screenshot_${timestamp}.pdf`;
    const outputPath = path.join(outputDir, filename);
    
    console.log('📝 Generating PDF from full page screenshot...');
    
    // Take a full page screenshot and convert to PDF
    await page.pdf({
      path: outputPath,
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
      printBackground: true,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      preferCSSPageSize: false,
      scale: 0.8
    });
    
    console.log(`✅ PDF generated successfully: ${filename}`);
    console.log(`📁 Location: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    throw error;
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
  console.log('🔍 Checking if development server is running...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Development server is not running on http://localhost:3001');
    console.log('💡 Please start the server first with: npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Server is running, proceeding with PDF generation...');
  
  try {
    await generateScreenshotPDF();
    console.log('🎉 PDF generation completed successfully!');
  } catch (error) {
    console.error('💥 PDF generation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateScreenshotPDF };
