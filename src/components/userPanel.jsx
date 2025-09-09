import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { AuthContext } from './context/authContext';
export default function UserPanel() {
   let { user, logout } = useContext(AuthContext)
   let logoutFunction = async () => {
      await logout();
      navigate("/logout")
   }
   return (
      <div className="w-full bg-[#00579A] py-2 px-4">
         {user ? (<div className="flex justify-end gap-5 items-center font-sans">
            <Link to="/myaccount" className="text-white text-sm no-underline hover:underline transition">
               My Account
            </Link>
            <button onClick={logoutFunction}>

               Logout
            </button>
            <Link to="/contactUs" className="text-white text-sm no-underline hover:underline transition">
               Contact Us
            </Link>
         </div>) : (<div className="flex justify-end gap-5 items-center font-sans">
            <Link to="/register" className="text-white text-sm no-underline hover:underline transition">
               Register
            </Link>
            <Link to="/login" className="text-white text-sm no-underline hover:underline transition">
               Login
            </Link>
            <Link to="/contactUs" className="text-white text-sm no-underline hover:underline transition">
               Contact Us
            </Link>
         </div>)}

      </div>
   );
}
