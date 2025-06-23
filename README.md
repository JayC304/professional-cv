# Professional CV - Tran Tien Anh

A modern, responsive CV website built with Next.js and Tailwind CSS, featuring automatic PDF generation.

## 🚀 Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Auto PDF Generation**: Automatically generate PDF versions of the CV
- **Print Functionality**: Built-in print and save as PDF buttons
- **Real-time Updates**: Hot reload during development

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PDF Generation**: Puppeteer
- **Language**: TypeScript

## 📋 CV Sections

- **Personal Information**: Contact details and professional title
- **Technical Skills**: Programming languages, tools, and frameworks
- **Work Experience**: Detailed project experience with team sizes
- **Education & Certifications**: Academic background and professional certifications
- **Languages**: English and Chinese proficiency

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/professional-cv.git
cd professional-cv
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## 📄 PDF Generation

### Available Scripts

- `npm run dev` - Start development server
- `npm run dev:pdf` - Start development server with auto PDF generation
- `npm run generate-pdf` - Generate PDF once
- `npm run simple-pdf` - Generate PDF with simple layout
- `npm run screenshot-pdf` - Generate PDF from screenshot
- `npm run debug-pdf` - Debug PDF generation

### PDF Output

Generated PDFs are saved in the `output/` directory with timestamps.

## 🎨 Customization

### Personal Information

Edit `app/page.tsx` to update:
- Name and title
- Contact information
- Work experience
- Skills and certifications

### Styling

- Modify Tailwind classes in components
- Update colors in `tailwind.config.ts`
- Add custom CSS in `app/globals.css`

### Profile Image

Replace `/public/TIEN ANH 4x6.jpg` with your own image.

## 📱 Responsive Design

The CV automatically adapts to different screen sizes:
- **Desktop**: 3-column layout with image on the left
- **Mobile**: Single column layout with centered content

## 🖨️ Print Optimization

- Print-specific CSS for optimal PDF output
- Hidden elements during printing
- Proper page breaks and margins

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Tran Tien Anh**
- Email: ttanh30dh@gmail.com
- Phone: +84 333900298

---

⭐ Star this repository if you found it helpful!
