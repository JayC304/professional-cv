const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateSimplePDF() {
  console.log('🚀 Starting simple PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop rendering
    await page.setViewport({
      width: 1200,
      height: 800,
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
    
    // Wait for all sections to load
    await page.waitForSelector('section', { timeout: 5000 });
    
    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Add CSS to prevent page breaks and ensure content starts from top
    await page.addStyleTag({
      content: `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body, html {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* Prevent page breaks */
          .bg-gradient-to-br {
            page-break-before: avoid !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            margin: 0 !important;
            padding: 1rem !important;
          }

          #cv-container {
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          header {
            page-break-before: avoid !important;
            page-break-after: avoid !important;
            margin-bottom: 1rem !important;
          }

          section {
            page-break-inside: avoid !important;
            margin-bottom: 1rem !important;
          }

          /* Remove any min-height that might cause issues */
          .min-h-screen {
            min-height: auto !important;
            height: auto !important;
          }

          /* Ensure proper margins */
          @page {
            margin: 0.5in !important;
            size: A4 !important;
          }
        }
      `
    });

    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Generate timestamp for filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `Tran_Tien_Anh_CV_Simple_${timestamp}.pdf`;
    const outputPath = path.join(outputDir, filename);
    
    console.log('📝 Generating PDF...');
    
    // Generate PDF with optimized settings
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      scale: 1.0
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
    await generateSimplePDF();
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

module.exports = { generateSimplePDF };
