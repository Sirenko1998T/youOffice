import { Link } from 'react-router-dom';
import React from 'react';

export default function UserPanel() {
   return (
      <div className="w-full bg-[#00579A] py-2 px-4">
         <div className="flex justify-end gap-5 items-center font-sans">
            <Link to="/register" className="text-white text-sm no-underline hover:underline transition">
               Register
            </Link>
            <Link to="/login" className="text-white text-sm no-underline hover:underline transition">
               Login
            </Link>
            <Link to="/contactUs" className="text-white text-sm no-underline hover:underline transition">
               Contact Us
            </Link>
         </div>
      </div>
   );
}
