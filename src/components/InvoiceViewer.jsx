import React, { useEffect, useState } from 'react';
import './css/InvoiceViewer.css';

const InvoiceViewer = () => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load stored PDF on component mount
  useEffect(() => {
    const stored = localStorage.getItem("invoice_pdf");
    if (stored) {
      setPdfData(stored);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = function (ev) {
        const base64PDF = ev.target.result;
        localStorage.setItem("invoice_pdf", base64PDF);
        setPdfData(base64PDF);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="invoice-viewer">
      <h2 className="title">Upload Your Invoice</h2>
      <div className="upload-box">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>

      {loading && <div className="loader">Loading PDF...</div>}

      {!loading && pdfData && (
        <iframe
          src={pdfData}
          title="Invoice PDF Preview"
          className="pdf-frame"
        ></iframe>
      )}
    </div>
  );
};

export default InvoiceViewer;
