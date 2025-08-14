import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Button from "../components/button";

const CATEGORY_OPTIONS = ["Pre-Sales", "Delivery", "After-Sales", "Others"];

export default function ContactUs() {
   const [value, setValue] = useState({
      name: "",
      company: "",
      contactNo: "",
      email: "",
      subject: "",
      category: "",
      message: "",
   });
   let [error, setError] = useState({});
   let success = () => {
      let errors = {};
      if (!value.name) errors.name = "Name is required";
      if (!value.email) errors.email = "Email is required";
      if (!value.contactNo) errors.contactNo = "Contact No is required";
      if (!value.company) errors.company = "Company is required";
      if (!value.message) errors.message = "Message is required";
      if (!value.subject) errors.subject = "Subject is required";
      if (!value.category) errors.category = "Category is required";
      setError(errors);
      return Object.keys(errors).length === 0;


   }

   const updateValue = (e) => {
      const { name, value } = e.target;
      setValue((prevValue) => ({
         ...prevValue,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (success()) {

         alert("Message sent successfully!");
         setValue({
            name: "",
            company: "",
            contactNo: "",
            email: "",
            subject: "",
            category: "",
            message: "",
         });
      }


   };

   return (
      <div className="font-sans text-gray-800">

         <div className="relative h-64 overflow-hidden">
            <img
               src="../assets/img/aboutUs/banner-min-1-3.jpg"
               alt="Contact Us Banner"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0    flex items-center justify-center">
               <h1 className="text-4xl font-light text-white">Contact Us</h1>
            </div>
         </div>


         <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="space-y-8">
               <h2 className="text-2xl font-medium">Send Us A Message</h2>

               <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                     placeholder="Name"
                     type="text"
                     name="name"
                     value={value.name}
                     onChange={updateValue}
                     error={error.name}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />

                  <Input
                     placeholder="Company"
                     type="text"
                     name="company"
                     value={value.company}
                     onChange={updateValue}
                     error={error.company}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />

                  <Input
                     placeholder="Contact No."
                     type="tel"
                     name="contactNo"
                     value={value.contactNo}
                     error={error.contactNo}
                     onChange={updateValue}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />

                  <Input
                     placeholder="Email"
                     type="email"
                     name="email"
                     value={value.email}
                     error={error.email}
                     onChange={updateValue}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />

                  <Select

                     values={CATEGORY_OPTIONS}
                     name="category"
                     value={value.category}
                     error={error.category}
                     onChange={updateValue}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
                  />

                  <Input
                     placeholder="Subject"
                     type="text"
                     name="subject"
                     value={value.subject}
                     error={error.subject}
                     onChange={updateValue}
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />

                  <textarea
                     name="message"
                     placeholder="Your Message"
                     value={value.message}
                     onChange={updateValue}
                     rows="6"
                     className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                  ></textarea>

                  <div className="pt-2">
                     <Button
                        label="Submit"
                        type="submit"
                        className="w-full bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 transition-colors text-lg"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}