
import React from "react";

function CertificateTemplate({
  holderName,
  courseName,
  validFrom,
  expiryDate
}) {
  return (
    <div className="certificate-page">

      {/* Header */}
      <header className="certificate-header">
        <div className="certificate-logo">        
          <span>
            National Life Support Committee
            <small>اللجنة الوطنية لدعم الحياة</small>
          </span>
        </div>

        <div className="menu-icon">☰</div>
      </header>

      {/* Page Heading */}
      <h1 className="verification-heading">
        Certificate Verification
      </h1>

      {/* Details Card */}
      <main className="certificate-card">

        <h2>Certificate Details</h2>

        <hr />

        <div className="certificate-info">

          <p>
            <strong>Certificate Holder Name:</strong>
            <span>{holderName}</span>
          </p>

          <p>
            <strong>Course Name:</strong>
            <span>{courseName}</span>
          </p>

          <p>
            <strong>Certificate Valid From:</strong>
            <span>{validFrom}</span>
          </p>

          <p>
            <strong>Certificate Expiry Date:</strong>
            <span>{expiryDate}</span>
          </p>

        </div>

      </main>

    </div>
  );
}

export default CertificateTemplate;
