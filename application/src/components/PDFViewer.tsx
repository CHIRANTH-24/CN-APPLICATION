"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface PDFViewerProps {
  initialPdf?: string | null;
}

export default function PDFViewer({ initialPdf }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialPdf) {
      setPdfUrl(`/api/pdf/${encodeURIComponent(initialPdf)}`);
    }
  }, [initialPdf]);

  return (
    <div className="space-y-4">
      {pdfUrl ? (
        <div className="mt-4">
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            className="border-2 border-cyan-500 rounded-lg"
          />
        </div>
      ) : (
        <div className="flex items-center text-yellow-500">
          <AlertCircle className="mr-2 h-4 w-4" />
          {initialPdf === undefined
            ? "Please select a PDF to view."
            : "Unable to load PDF. Please try uploading again."}
        </div>
      )}
    </div>
  );
}
