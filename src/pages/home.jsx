import React from "react";
import { Link } from 'react-router-dom';
import Slider from "../components/Slider";
import banner1 from "../assets/img/slider/Banner_HSM_SECURIO_Large_Office_1024x374px-1024x374.jpg";
import banner2 from "../assets/img/slider/Homepage Banner-1024x374.jpg";
import banner3 from "../assets/img/slider/Homepage Banner-4-1024x374.jpg";
import banner4 from "../assets/img/slider/Printers-1024x374.jpg";
import banner5 from "../assets/img/slider/SG_online-banner_Jun-1024x374.jpg";
import Categories from "../components/categories";
import InfoBlock from "../components/infoBlock";

export default function Home() {
   const slideImg = [banner1, banner2, banner3, banner4, banner5];

   return (
      <div className="max-w-7xl mx-auto px-4 py-8">
         <div className="flex flex-col lg:flex-row gap-6">
            {/* Категории - 20% */}
            <div className="w-full lg:w-[20%]">
               <Categories />
            </div>

            {/* Основной контент - 80% */}
            <div className="w-full lg:w-[80%]">
               {/* Слайдер */}
               <div className="w-full mb-6">
                  <Slider images={slideImg} />
               </div>

               {/* InfoBlock под слайдером */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link to='/faq' className="group">
                     <InfoBlock
                        title='EASY'
                        description='ONLINE PAYMENT'
                        image='../assets/img/info/payment.png'
                     />
                  </Link>

                  <Link to='/faq' className="group">
                     <InfoBlock
                        title='DELIVERY'
                        description='WITHIN SINGAPORE'
                        image='../assets/img/info/delivery.png'
                     />
                  </Link>

                  <div className="group">
                     <InfoBlock
                        title='COLLECTION'
                        description='AT RETAIL OUTLET'
                        image='../assets/img/info/gift.png'
                     />
                  </div>

                  <Link to='/faq' className="group">
                     <InfoBlock
                        title='BUY MORE'
                        description='TO ENJOY GREAT DISCOUNTS'
                        image='../assets/img/info/sales.png'
                     />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}