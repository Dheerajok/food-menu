import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import hook

const Payment = () => {
  const [copied, setCopied] = useState(false);
  const upiId = '9407472383@ybl';
  const navigate = useNavigate(); // <-- initialize navigate function

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Scan & Pay</h1>

      <img
        src="https://res.cloudinary.com/djqya1k8g/image/upload/v1750401424/qr_dc2qsb.jpg"
        alt="Payment QR Code"
        className="w-60 h-60 mb-4"
      />

      <p className="text-gray-700 text-center mb-1">
        UPI ID: <strong>{upiId}</strong>
      </p>

      <button
        onClick={handleCopy}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2 transition-all"
      >
        Copy UPI ID
      </button>

      {copied && (
        <p className="text-green-600 mt-2 text-sm">UPI ID copied to clipboard!</p>
      )}

      <p className="text-gray-500 mt-4 text-center">Name: Master Arun Suryavanshi</p>
      <p className="text-sm text-gray-400 mt-2 text-center">Use any UPI app like PhonePe, GPay, or Paytm to scan and pay.</p>

      {/* Go Home Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-all"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Payment;
