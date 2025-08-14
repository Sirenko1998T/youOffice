import { Link } from 'react-router-dom';
import React from 'react';
export default function UserPanel() {
   return (
      <div className="bg-[#00579A] py-2 px-4 flex justify-end">
         <div className="flex gap-5 items-center font-sans">
            <Link to="/register" className="text-white text-sm no-underline hover:underline transition">
               Register
            </Link>
            <Link to="/login" className="text-white text-sm no-underline hover:underline transition">
               Login
            </Link>
            <Link to="/" className="text-white text-sm no-underline hover:underline transition">
               Contact Us
            </Link>
         </div>
      </div>
   );
}