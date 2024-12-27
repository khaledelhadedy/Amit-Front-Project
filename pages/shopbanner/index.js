// 'use client';

// import React from "react";
// import Link from "next/link";

// const ShopBanners = () => {
//   return (
//     <div className="py-10 bg-gray-100">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Banner 1 */}
//           <div className="relative group">
//             <img
//               src="images/shop1.png"
//               alt="Shop Banner 1"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
//               <h5 className="text-lg font-semibold">Super Sale</h5>
//               <h3 className="text-3xl font-bold mt-2">New Collection</h3>
//               <Link
//                 href="/shop"
//                 className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>

//           {/* Banner 2 */}
//           <div className="relative group">
//             <img
//               src="images/shop2.png"
//               alt="Shop Banner 2"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
//               <h3 className="text-3xl font-bold">New Season</h3>
//               <h4 className="text-lg font-semibold mt-2">Sale 40% Off</h4>
//               <Link
//                 href="/shop"
//                 className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopBanners;
  

import ShopBanners from "../../components/shopbanner/shopbanner";
import { getShopData } from "@/utils/shopbannerdata";

export async function getServerSideProps() {
 
  const banners = getShopData();

  return {
    props: { banners }, 
  };
}

export default function ShopBannersPage({ banners }) {
  return <ShopBanners banners={banners} />;
}
