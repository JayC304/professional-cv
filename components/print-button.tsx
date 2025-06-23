"use client"

import { Printer, Download } from "lucide-react"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  const handleSavePDF = () => {
    // Use browser's print functionality to save as PDF
    // This opens the print dialog where users can choose "Save as PDF"
    window.print()
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleSavePDF}
        className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:shadow-lg no-print"
      >
        <Download className="h-4 w-4" />
        <span>Save as PDF</span>
      </button>

      <button
        onClick={handlePrint}
        className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:shadow-lg no-print"
      >
        <Printer className="h-4 w-4" />
        <span>Print</span>
      </button>
    </div>
  )
}
