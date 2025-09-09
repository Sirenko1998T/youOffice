import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import { Link } from "react-router-dom";
import { AuthService } from "../js/authService";

export default function Register() {
   const [formData, setFormData] = useState({
      firstName: "",
      email: "",
      password: "",
   });

   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState('');
   const [error, setError] = useState({});

   const validate = () => {
      let errors = {};
      if (!formData.firstName) errors.firstName = "First Name is required";
      if (!formData.email) errors.email = "Email is required";
      if (!formData.password) errors.password = "Password is required";

      setError(errors);
      return Object.keys(errors).length === 0;
   }

   const updateValue = (e) => {
      const { name, value } = e.target;
      setFormData((prevValue) => ({
         ...prevValue,
         [name]: value
      }));
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validate()) {
         return;
      }

      setLoading(true);
      setSuccess('');
      setError({});

      try {
         const result = await AuthService.register(
            formData.email,
            formData.password,
            formData.firstName
         );

         if (result.success) {
            setSuccess('Registration successful!');
            // Очищаем форму после успешной регистрации
            setFormData({
               firstName: "",
               email: "",
               password: "",
            });
         } else {
            setError({ general: result.error });
         }
      } catch (error) {
         setError({ general: "An error occurred during registration" });
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
         <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
               <h1 className="text-3xl font-bold text-gray-900 mb-2">New Customer</h1>
               <p className="text-gray-700 text-lg">
                  If you already have an account with us, please login at the{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                     login page
                  </Link>.
               </p>
            </div>

            {success && (
               <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {success}
               </div>
            )}

            {error.general && (
               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error.general}
               </div>
            )}

            <div className="space-y-4">
               <Input
                  label="* First Name"
                  name="firstName"
                  type="text"
                  onChange={updateValue}
                  error={error.firstName}
                  value={formData.firstName}
                  required
               />

               <Input
                  label="* Email"
                  name="email"
                  type="email"
                  onChange={updateValue}
                  error={error.email}
                  value={formData.email}
                  required
               />

               <Input
                  label="* Password"
                  name="password"
                  type="password"
                  onChange={updateValue}
                  error={error.password}
                  value={formData.password}
                  required
               />
            </div>

            <button
               type="submit"
               disabled={loading}
               className={`
                  w-full 
                  bg-blue-600 
                  hover:bg-blue-700 
                  text-white 
                  font-bold 
                  py-3 
                  px-4 
                  rounded-lg 
                  mt-6 
                  transition-colors 
                  duration-200
                  ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}
               `}
            >
               {loading ? 'Registering...' : 'Register'}
            </button>
         </form>
      </div>
   );
}