import React, { useContext, useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { StoreContext } from './Context';
import { useNavigate } from 'react-router-dom';
import { saveSvgAsPng } from 'save-svg-as-png';

function QRcodeGenerator() {
  const navigate = useNavigate();
  const { formDetails } = useContext(StoreContext);
  const text = formDetails.ProductID || '';
  const url = `http://localhost:8080/${text}`;

  const svgRef = useRef(null);

  const downloadQRCode = () => {
    const svg = svgRef.current;
    if (svg) {
      saveSvgAsPng(svg, 'qrcode.svg.png', { scale: 100 });
    }
  };
  
  
  return (
    <div>
      <div>
        <p className='m-3 font-bold text-lg'>QR Code Generator</p>
        <QRCode ref={svgRef} className="w-1/2 mx-auto m-6" value={url} />
      </div>

      <div>
        <button onClick={downloadQRCode} className="m-6 bg-violet-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded">
          Download QR Code
        </button>
      </div>

      <div>
        <button onClick={() => navigate('/')} className="m-6 bg-violet-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded">
          Back to Homepage
        </button>
      </div>
    </div>
  );
}

export default QRcodeGenerator;

