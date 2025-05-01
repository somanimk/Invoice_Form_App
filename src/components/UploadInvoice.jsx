import React, { useState, useEffect } from 'react';

const UploadInvoice = () => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load PDF from localStorage on component mount
  useEffect(() => {
    const storedPDF = localStorage.getItem('uploaded_invoice');
    if (storedPDF) {
      setPdfData(storedPDF);
    }
  }, []);

  // Handle file input change
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64PDF = e.target.result;
        localStorage.setItem('uploaded_invoice', base64PDF);
        setPdfData(base64PDF);
        setLoading(false);
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Upload Your Invoice</h2>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      {loading && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#f1f1f1' }}>
          Loading PDF...
        </div>
      )}

      {!loading && pdfData && (
        <iframe
          src={pdfData}
          title="PDF Viewer"
          width="80%"
          height="500px"
          style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '10px' }}
        ></iframe>
      )}
    </div>
  );
};

export default UploadInvoice;
