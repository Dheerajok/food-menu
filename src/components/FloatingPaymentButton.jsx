import React from 'react';
import { Link } from 'react-router-dom';
// import { FaMoneyBillWave } from 'react-icons/fa'; // Optional icon

const FloatingPaymentButton = () => {
  return (
    <Link
      to="/payment"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all z-50"
    >
      {/* <FaMoneyBillWave className="text-xl" /> */}
      Pay Now
    </Link>
  );
};

export default FloatingPaymentButton;
