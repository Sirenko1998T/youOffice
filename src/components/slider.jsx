import React, { useState, useEffect } from "react";

export default function Slider({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const next = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   }

   const prev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   }

   useEffect(() => {
      const interval = setInterval(next, 3000);
      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <div className="relative w-full overflow-hidden h-[374px]">
         <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
         >
            &lt;
         </button>

         <div className="flex h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
               <div key={index} className="w-full flex-shrink-0">
                  <img
                     src={img}
                     alt={`slide-${index}`}
                     className="w-full h-full object-cover"
                  />
               </div>
            ))}
         </div>

         <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
         >
            &gt;
         </button>

         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
               />
            ))}
         </div>
      </div>
   )
}