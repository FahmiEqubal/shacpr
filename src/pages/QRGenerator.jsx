
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import certificates from "../certificates";

function QRGenerator() {
  const downloadQR = (id) => {
    const canvas = document.getElementById(`qr-${id}`);
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `${id}-certificate-qr.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const getCertificateUrl = (id) => {
    return `${window.location.origin}/shacpr/#/certificate/${id}`;
  };

  return (
    <div className="generator-page">
      <h1>Certificate QR Generator</h1>
      <p>Scan the QR code to verify the certificate.</p>

      {certificates.map((certificate) => {
        const url = getCertificateUrl(certificate.id);

        return (
          <div className="qr-container" key={certificate.id}>
            <h3>{certificate.courseName}</h3>
            <p>{certificate.holderName}</p>

            <QRCodeCanvas
              id={`qr-${certificate.id}`}
              value={url}
              size={250}
              level="H"
              includeMargin
            />

            <p className="generated-url">{url}</p>

            <button onClick={() => downloadQR(certificate.id)}>
              Download QR Code
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default QRGenerator;
