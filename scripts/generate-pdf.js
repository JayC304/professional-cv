const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop rendering
    await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.5
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

    // Wait a bit more for images and fonts to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Generate timestamp for filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `Tran_Tien_Anh_CV_${timestamp}.pdf`;
    const outputPath = path.join(outputDir, filename);
    
    console.log('📝 Generating PDF...');
    
    // Add CSS to force desktop layout and fix content visibility
    await page.addStyleTag({
      content: `
        @media screen, print {
          /* Force desktop layout for PDF */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Ensure all content is visible */
          body, html {
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* Force desktop responsive classes */
          .md\\:flex-row { flex-direction: row !important; }
          .md\\:text-left { text-align: left !important; }
          .md\\:justify-start { justify-content: flex-start !important; }
          .md\\:col-span-1 { grid-column: span 1 / span 1 !important; }
          .md\\:col-span-2 { grid-column: span 2 / span 2 !important; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .md\\:w-40 { width: 10rem !important; }
          .md\\:h-40 { height: 10rem !important; }
          .md\\:text-5xl { font-size: 3rem !important; line-height: 1.1 !important; }
          .md\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
          .md\\:p-10 { padding: 2.5rem !important; }
          .md\\:mt-0 { margin-top: 0 !important; }

          /* Override mobile-first classes */
          .flex-col { flex-direction: row !important; }
          .text-center { text-align: left !important; }
          .justify-center { justify-content: flex-start !important; }
          .grid-cols-1 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }

          /* Ensure grid and flex work */
          .grid { display: grid !important; }
          .flex { display: flex !important; }
          .space-y-8 > * + * { margin-top: 2rem !important; }
          .space-y-6 > * + * { margin-top: 1.5rem !important; }
          .space-y-4 > * + * { margin-top: 1rem !important; }
          .space-y-3 > * + * { margin-top: 0.75rem !important; }

          /* Gaps */
          .gap-6 { gap: 1.5rem !important; }
          .gap-8 { gap: 2rem !important; }
          .gap-4 { gap: 1rem !important; }
          .gap-2 { gap: 0.5rem !important; }

          /* Ensure sections are visible */
          section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            page-break-inside: avoid !important;
          }

          /* Container sizing */
          .max-w-5xl {
            max-width: none !important;
            width: 100% !important;
          }

          /* Background and colors */
          .bg-gradient-to-br {
            background: linear-gradient(to bottom right, #ecfeff, #ffffff) !important;
          }

          .bg-white {
            background-color: white !important;
          }

          /* Remove any height restrictions */
          .min-h-screen {
            min-height: auto !important;
          }
        }
      `
    });

    // Get the full page height
    const bodyHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    });

    console.log(`📏 Page height: ${bodyHeight}px`);

    // Generate PDF with full content
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.4in',
        left: '0.4in'
      },
      preferCSSPageSize: false,
      scale: 0.75,
      width: '8.27in',
      height: `${Math.max(bodyHeight / 96, 11.7)}in` // Convert px to inches, minimum A4 height
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
    await generatePDF();
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

module.exports = { generatePDF };
