import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
export default function Register() {
   const [value, setValue] = useState({
      firstName: "",
      lastName: "",
      postalCode: "",
      address1: "",
      unitNo: "",
      city: "",
      password: "",
      passwordConfirm: ""
   });
   let [error, setError] = useState({});
   let validate = () => {
      let errors = {};
      if (!value.firstName) errors.firstName = "First Name is required";
      if (!value.lastName) errors.lastName = "Last Name is required";
      if (!value.postalCode) errors.postalCode = "Postal Code is required";
      if (!value.address1) errors.address1 = "Address 1 is required";
      if (!value.city) errors.city = "City is required";
      if (!value.password) errors.password = "Password is required";
      if (value.password !== value.passwordConfirm) {
         errors.passwordConfirm = "Passwords do not match";
      }
      setError(errors);
      return Object.keys(errors).length === 0;
   }

   let updateValue = (e) => {
      let { name, value } = e.target;
      setValue((prevValue) => ({
         ...prevValue,
         [name]: value
      }))
   }
   let handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
         alert("Form submitted successfully!");
         setValue({
            firstName: "",
            lastName: "",
            postalCode: "",
            address1: "",
            unitNo: "",
            city: "",
            password: "",
            passwordConfirm: ""
         });
         setError({})

      }
   }
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
         <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
               <h1 className="text-3xl font-bold text-gray-900 mb-2">New Customer</h1>
               <p className="text-gray-700 text-lg">
                  If you already have an account with us, please login at the{" "}
                  <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                     login page
                  </a>.
               </p>
            </div>

            <div className="space-y-4">

               <Input

                  label="* First Name"
                  name="firstName"
                  type="text"
                  onChange={updateValue}
                  error={error.firstName}
                  value={value.firstName}
               />
               <Input
                  label="* Last Name"
                  name="lastName"
                  type="text"
                  onChange={updateValue}
                  error={error.lastName}
                  value={value.lastName}
               />
               <Input
                  label="* Postal Code"
                  name="postalCode"
                  type="number"
                  onChange={updateValue}
                  error={error.postalCode}
                  value={value.postalCode}
               />
               <Input
                  label="* Address 1"
                  name="address1"
                  type="text"
                  onChange={updateValue}
                  error={error.address1}
                  value={value.address1}
               />
               <Input
                  label="Unit No."
                  name="unitNo"
                  type="number"
                  onChange={updateValue}
                  error={error.unitNo}
                  value={value.unitNo}
               />
               <Input
                  label="* City"
                  name="city"
                  type="text"
                  onChange={updateValue}
                  error={error.city}
                  value={value.city}
               />
               <Select label={
                  "* Country"
               } values={['Singaapore']} />
               <Input
                  label="* Password"
                  name="password"
                  type="password"
                  onChange={updateValue}
                  error={error.password}
                  value={value.password}
               />
               <Input
                  label=" * Password Confirm"
                  name="passwordConfirm"
                  type="password"
                  onChange={updateValue}
                  error={error.passwordConfirm}
                  value={value.passwordConfirm}
               />
            </div>

            <button
               type="submit"
               className="
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
    hover:cursor-pointer
  "
            >
               Register
            </button>
         </form>
      </div >
   );
}