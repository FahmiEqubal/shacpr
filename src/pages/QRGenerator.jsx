
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRGenerator() {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const generateQR = () => {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      alert("Please enter a URL");
      return;
    }

    try {
      const parsedUrl = new URL(trimmedUrl);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        alert("Please enter a valid HTTP or HTTPS URL");
        return;
      }

      setGeneratedUrl(trimmedUrl);
    } catch {
      alert("Please enter a valid URL");
    }
  };

  const downloadQR = () => {
    const canvas = document.getElementById("certificate-qr");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "certificate-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="generator-page">
      <h1>Certificate QR Generator</h1>
      <p>Paste your certificate verification URL below.</p>

      <input
        type="url"
        placeholder="https://fahmiequbal.github.io/shacpr/#/certificate/Basic_Life_Support"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setGeneratedUrl("");
        }}
      />

      <button onClick={generateQR}>
        Generate QR Code
      </button>

      {generatedUrl && (
        <div className="qr-container">
          <QRCodeCanvas
            id="certificate-qr"
            value={generatedUrl}
            size={250}
            level="H"
            includeMargin
          />

          <p className="generated-url">{generatedUrl}</p>

          <button onClick={downloadQR}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default QRGenerator;
