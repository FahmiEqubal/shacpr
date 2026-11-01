
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import QRGenerator from "./pages/QRGenerator";
import CertificatePage from "./pages/CertificatePage";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/generator" element={<QRGenerator />} />
        <Route path="/certificate/:id" element={<CertificatePage />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
