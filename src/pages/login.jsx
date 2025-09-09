import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../components/button";
import Input from "../components/input";
import { AuthService } from "../js/authService";

export default function Login() {
   const [formData, setFormData] = useState({
      email: "",
      password: ""
   });

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const updateValue = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.email || !formData.password) {
         setError("Please fill in all fields");
         return;
      }

      setLoading(true);
      setError("");

      try {
         const result = await AuthService.login(formData.email, formData.password);

         if (result.success) {

            navigate('/myaccount');
         } else {
            setError(result.error);
         }
      } catch (error) {
         setError("An error occurred during login");
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="container mx-auto px-4 py-8 max-w-[1200px] min-h-screen">
         <h1 className="text-2xl md:text-3xl font-normal text-[#333] mb-6">Login</h1>

         <div className="flex flex-col md:flex-row gap-8">
            {/* Левая колонка - Форма входа */}
            <div className="md:w-1/2">
               <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#333] mb-2">Returning Customer</h3>
                  <p className="text-[#666] mb-4">Please enter your login details</p>

                  {error && (
                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4">
                        {error}
                     </div>
                  )}

                  <form onSubmit={handleSubmit}>
                     <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={updateValue}
                        className="w-full px-3 py-2 border border-[#ddd] rounded-none mb-4 focus:outline-none focus:border-[#333]"
                        required
                     />

                     <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={updateValue}
                        className="w-full px-3 py-2 border border-[#ddd] rounded-none mb-2 focus:outline-none focus:border-[#333]"
                        required
                     />

                     <p className="text-sm text-[#666] mb-6">
                        Forgot your password?{' '}
                        <Link to="/reset" className="text-[#333] hover:underline">
                           Reset here
                        </Link>
                     </p>

                     <Button
                        type="submit"
                        label={loading ? "Logging in..." : "Login"}
                        disabled={loading}
                        className={`w-full bg-[#333] text-white py-3 px-4 rounded-none hover:bg-[#555] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''
                           }`}
                     />

                     <p className="text-sm text-[#666] mt-4">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-[#333] font-medium hover:underline">
                           Register Now
                        </Link>
                     </p>
                  </form>
               </div>
            </div>

            {/* Правая колонка - Информация о регистрации */}
            <div className="md:w-1/2">
               <h3 className="text-lg font-medium text-[#333] mb-2">New Customer</h3>
               <p className="text-[#666] mb-6">
                  By creating an account you will be able to shop faster, be up to date on an order's status,
                  and keep track of the orders you have previously made. Enjoy exclusive offers and benefits!
               </p>

               <ul className="text-[#666] mb-6 space-y-2">
                  <li>• Faster checkout process</li>
                  <li>• Order history and tracking</li>
                  <li>• Exclusive member discounts</li>
                  <li>• Personalized recommendations</li>
                  <li>• Wishlist and saved items</li>
               </ul>

               <Link to="/register">
                  <Button
                     label="Create Account"
                     className="w-full bg-white text-[#333] py-3 px-4 border border-[#333] rounded-none hover:bg-[#f5f5f5] transition-colors"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
}