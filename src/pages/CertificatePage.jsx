
import React from "react";
import { useParams } from "react-router-dom";
import CertificateTemplate from "../components/CertificateTemplate";
import certificates from "../certificates";

function CertificatePage() {
  const { id } = useParams();

  const certificate = certificates.find(
    (item) => item.id === id
  );

  if (!certificate) {
    return <h2>Certificate Not Found</h2>;
  }

  return (
    <CertificateTemplate {...certificate} />
  );
}

export default CertificatePage;
