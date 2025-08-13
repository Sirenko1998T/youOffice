import React from 'react';

export default function BurgerMenu() {
   return (
      <div
         className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-gray-800 cursor-pointer transition-colors duration-300 hover:bg-gray-700"
      >

         <div
            className="w-7 h-[3px] bg-white my-[4px]"
         ></div>


         <div
            className="w-7 h-[3px] bg-white my-[4px]"
         ></div>


         <div
            className="w-7 h-[3px] bg-white my-[4px]"
         ></div>
      </div>
   );
}