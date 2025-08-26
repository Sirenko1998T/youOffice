import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "../components/Slider";
import banner1 from "../assets/img/slider/Banner_HSM_SECURIO_Large_Office_1024x374px-1024x374.jpg";
import banner2 from "../assets/img/slider/Homepage Banner-1024x374.jpg";
import banner3 from "../assets/img/slider/Homepage Banner-4-1024x374.jpg";
import banner4 from "../assets/img/slider/Printers-1024x374.jpg";
import banner5 from "../assets/img/slider/SG_online-banner_Jun-1024x374.jpg";
import Categories from "../components/categories";
import InfoBlock from "../components/infoBlock";
import CategoryPage from '../pages/categoryPage.jsx';
import CategoryBlock from '../components/categoryBlock.jsx'
import { featuredProduct, newIn, bestDeals } from "../js/queries.js";
import { getDocs } from 'firebase/firestore';

export default function Home() {
   const slideImg = [banner1, banner2, banner3, banner4, banner5];
   const [featured, setFeatured] = useState([]);
   const [newInProducts, setNewInProducts] = useState([]);
   const [bestDealsProducts, setBestDealsProducts] = useState([]);


   useEffect(() => {
      const fetchRecommended = async () => {
         try {
            const [featuredSnap, newInSnap, bestDealsSnap] = await Promise.all([
               getDocs(featuredProduct),
               getDocs(newIn),
               getDocs(bestDeals)
            ]);

            setFeatured(featuredSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setNewInProducts(newInSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setBestDealsProducts(bestDealsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

         } catch (error) {
            console.error("Error fetching products:", error);

         }
      };

      fetchRecommended();
   }, []);

   return (
      <div className="max-w-7xl mx-auto px-4 py-8">
         <div className="flex flex-col lg:flex-row gap-6">

            <div className="w-full lg:w-[20%]">
               <Categories />
            </div>


            <div className="w-full lg:w-[80%]">

               <div className="w-full mb-6">
                  <Slider images={slideImg} />
               </div>

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
               <CategoryBlock label='FEATURED PRODUCTS' products={featured} />
               <CategoryBlock label=' NEW IN' products={newInProducts} />
               <CategoryBlock label='BEST DEALS' products={bestDealsProducts} />
            </div>
         </div>
      </div>
   );
} 