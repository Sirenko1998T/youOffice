import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

export default function Reset() {
   return (
      <div className="max-w-md mx-auto p-6 font-sans">

         <h1 className="text-2xl font-light text-gray-800 mb-4">Forgot Your Password?</h1>

         <p className="text-gray-600 mb-6">
            Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.
         </p>


         <div className="mb-6">
            <Input
               label="* E-Mail Address"
               type="email"
               placeholder="E-Mail Address"
               className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
         </div>


         <div className="flex flex-col sm:flex-row gap-4">
            <Button
               label="Submit"
               className="w-full sm:w-auto bg-gray-800 text-white px-6 py-2 hover:bg-gray-700 transition"
               onClick={() => { }}
            />

            <Link to="/login" className="w-full sm:w-auto">
               <Button
                  label="Back"
                  className="w-full bg-white text-gray-800 px-6 py-2 border border-gray-300 hover:bg-gray-50 transition"
                  onClick={() => { }}
               />
            </Link>
         </div>
      </div>
   )
}