"use client";

import FileUpload from "@/components/FileUpload";
import NetworkVisualizer from "@/components/NetworkVisualizer";
import PDFViewer from "@/components/PDFViewer";
import { useState } from "react";

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [showViewer, setShowViewer] = useState(false);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);

  const handleUploadSuccess = (filename: string) => {
    setUploadedFile(filename);
    setIsSimulationComplete(false);
  };

  const handleSimulationComplete = () => {
    setIsSimulationComplete(true);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        Network PDF Manager
      </h1>
      <div className="max-w-2xl mx-auto">
        {!uploadedFile && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              Upload PDF
            </h2>
            <FileUpload onUploadSuccess={handleUploadSuccess} />
          </div>
        )}
        {uploadedFile && !showViewer && (
          <div className="space-y-8">
            <NetworkVisualizer
              action="upload"
              onSimulationComplete={handleSimulationComplete}
            />
            {isSimulationComplete && (
              <div className="text-center">
                <button
                  onClick={() => setShowViewer(true)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                  View Uploaded PDF
                </button>
              </div>
            )}
          </div>
        )}
        {showViewer && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              View PDF
            </h2>
            <PDFViewer initialPdf={uploadedFile} />
          </div>
        )}
      </div>
    </main>
  );
}
