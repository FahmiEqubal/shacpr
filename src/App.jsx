
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRGenerator from "./pages/QRGenerator";
import CertificatePage from "./pages/CertificatePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/shacpr">
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/generator" element={<QRGenerator />} />
        <Route path="/certificate/:id" element={<CertificatePage />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
