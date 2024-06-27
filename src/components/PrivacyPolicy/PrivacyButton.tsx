'use client';

import React from 'react';

const PrivacyButton: React.FC = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/PolíticasDePrivacidadDeWebCoffee.pdf';
    link.download = 'PolíticasDePrivacidadDeWebCoffee.pdf';
    link.click();
  };

  return (
    <button
      className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 mt-4 sm:mt-0 no-underline hover:underline underline-offset-8 sm:pt-0 mr-1 sm:mr-0"
      onClick={downloadPdf}
    >
      Descargar PDF
    </button>
  );
};

export default PrivacyButton;
