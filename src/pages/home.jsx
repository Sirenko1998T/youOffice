import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import banner1 from "../assets/img/slider/Banner_HSM_SECURIO_Large_Office_1024x374px-1024x374.jpg";
import banner2 from "../assets/img/slider/Homepage Banner-1024x374.jpg";
import banner3 from "../assets/img/slider/Homepage Banner-4-1024x374.jpg";
import banner4 from "../assets/img/slider/Printers-1024x374.jpg";
import banner5 from "../assets/img/slider/SG_online-banner_Jun-1024x374.jpg";
import Categories from "../components/categories";

export default function Home() {
   const slideImg = [banner1, banner2, banner3, banner4, banner5];

   return (
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4 py-8">


         <div className="w-full md:w-[20%]">
            <Categories />
         </div>
         <div className="w-full md:w-[70%]">
            <Slider images={slideImg} />
         </div>



      </div>
   )
}