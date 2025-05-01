import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './css/PDFUploader.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PDFUploader = () => {
  const [fileData, setFileData] = useState(null);

  // Convert PDF to base64 and save
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setFileData(base64);
        localStorage.setItem('uploadedPDF', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  // Load PDF from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('uploadedPDF');
    if (saved) {
      setFileData(saved);
    }
  }, []);

  return (
    <div className="pdf-uploader">
      <input type="file" accept="application/pdf" onChange={handleUpload} className="file-input" />
      {fileData && (
        <div className="pdf-preview">
          <Document
            file={fileData}
            onLoadError={(err) => console.error('Error loading PDF:', err)}
            loading={<div className="loading-box">Loading PDF...</div>}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
