import React from "react";
import { Link } from 'react-router-dom';
import Button from "../components/button";
import Input from "../components/input";

export default function Login() {
   return (
      <div className="container mx-auto px-4 py-8 max-w-[1200px]">

         <h1 className="text-2xl md:text-3xl font-normal text-[#333] mb-6">Login</h1>

         <div className="flex flex-col md:flex-row gap-8">

            <div className="md:w-1/2">
               <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#333] mb-2">Returning Customer</h3>
                  <p className="text-[#666] mb-4">Login</p>

                  <Input
                     type="text"
                     placeholder="Email Address"
                     className="w-full px-3 py-2 border border-[#ddd] rounded-none mb-4 focus:outline-none focus:border-[#333]"
                  />

                  <Input
                     type="password"
                     placeholder="Password"
                     className="w-full px-3 py-2 border border-[#ddd] rounded-none mb-2 focus:outline-none focus:border-[#333]"
                  />

                  <p className="text-sm text-[#666] mb-6">
                     Forgot your password? <Link to="/reset" className="text-[#333] hover:underline">Reset here</Link>
                  </p>

                  <Button
                     label="Login"
                     className="w-full bg-[#333] text-white py-3 px-4 rounded-none hover:bg-[#555] transition-colors"
                     onClick={() => { }}
                  />

                  <p className="text-sm text-[#666] mt-4">
                     Don't have an account?{' '}
                     <Link to="/register" className="text-[#333] font-medium hover:underline">Register Now</Link>
                  </p>
               </div>
            </div>


            <div className="md:w-1/2">
               <h3 className="text-lg font-medium text-[#333] mb-2">Returning Customer</h3>
               <p className="text-[#666] mb-6">
                  By creating an account you will be able to shop faster, be up to date on an order's status and keep track of the orders you have previously made.
               </p>

               <Link to="/register">
                  <Button
                     label="Register"
                     className="w-full bg-white text-[#333] py-3 px-4 border border-[#333] rounded-none hover:bg-[#f5f5f5] transition-colors"
                  />
               </Link>
            </div>
         </div>
      </div>
   )
}