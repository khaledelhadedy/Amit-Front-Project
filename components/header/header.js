
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useCart } from "../../pages/Context/cartContext";
//  import { useEffect } from "react"

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const currentPath = usePathname();
//   const router = useRouter();
//   const { totalItems } = useCart();
//   const token =  typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

//   const handleLogout = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("authToken");
//       router.push("/");
//     }
//   };
//   const toggleMenu = () => setIsOpen((prev) => !prev);
//   const closeMenu = () => setIsOpen(false);
//   const menuItems = [
//     { path: "/", label: "HOME" },
//     { path: "/products", label: "PRODUCTS" },
//     { path: "/blog", label: "BLOG" },
//     { path: "/contact", label: "CONTACT US" },
//   ];
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <Link href="/" onClick={closeMenu} className="flex items-center">
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             className="h-12 w-auto object-contain"
//           />
//         </Link>
//         {/* toggle Menu Button */}
//         <button
//           className="md:hidden flex flex-col items-center justify-center space-y-1"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           <span className="w-6 h-0.5 bg-black"></span>
//           <span className="w-6 h-0.5 bg-black"></span>
//           <span className="w-6 h-0.5 bg-black"></span>
//         </button>
//         {/* Menu Items */}
//         {token ? (
//           <ul className={`fixed md:relative top-0 left-0 md:top-auto md:left-auto w-full md:w-auto bg-white md:flex md:space-x-6 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
//             {menuItems.map((item, index) => (
//               <li key={item.path} className="relative group">
//                 <Link
//                   href={item.path}
//                   className={`block px-4 py-2 md:py-0 md:inline md:px-0 ${currentPath === item.path
//                     ? "text-blue-600 font-semibold"
//                     : "text-gray-800"
//                     }`}
//                   onClick={closeMenu}
//                 >
//                   {item.label}
//                 </Link>
//                 {item.dropdown && (
//                   <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                     {item.dropdown.map((subItem) => (
//                       <li key={subItem.path}>
//                         <Link
//                           href={subItem.path}
//                           className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg"
//                           onClick={closeMenu}>
//                           {subItem.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         ) : (
//           <div>
//             <Link
//               href="/login"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Login
//             </Link>
//           </div>
//         )}
//         {token && (
//           <div className="flex items-center space-x-4">

//             <div className="relative">
//               <button
//                 onClick={() => setShowSearch(!showSearch)}
//                 className="text-gray-800"
//                 aria-label="Toggle Search"
//               >
//                 <i className="fa fa-search"></i>
//               </button>
//               {showSearch && (
//                 <div className="absolute top-0 right-4 w-64 bg-white p-2 shadow-lg rounded-lg">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full border border-gray-300 p-2  rounded-lg focus:outline-none"
//                   />
//                 </div>
//               )}
//             </div>
//             <Link href="/cart" className="relative text-gray-800">
//               <div className="relative">
//                 <i className="fa fa-shopping-cart text-xl"></i>
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
//                     {totalItems}
//                   </span>
//                 )}
//               </div>

//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
// export default Navbar;



'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/utils/navItems";
import { useCart } from "@/pages/Context/cartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const currentPath = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();

  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/");
  };
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Toggle Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Menu Items */}
        {token ? (
          <ul className={`fixed md:relative top-0 left-0 md:top-auto md:left-auto w-full md:w-auto bg-white md:flex md:space-x-6 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
            {menuItems.map((item, index) => (
              <li key={item.path} className="relative group">
                <Link
                  href={item.path}
                  className={`block px-4 py-2 md:py-0 md:inline md:px-0 ${currentPath === item.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800"
                    }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          href={subItem.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg"
                          onClick={closeMenu}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <div>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </Link>
          </div>
        )}

        {/* Additional Icons */}
        {token && (
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-gray-800"
                aria-label="Toggle Search"
              >
                <i className="fa fa-search"></i>
              </button>
              {showSearch && (
                <div className="absolute top-0 right-4 w-64 bg-white p-2 shadow-lg rounded-lg">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  />
                </div>
              )}
            </div>
            <Link href="/cart" className="relative text-gray-800">
              <div className="relative">
                <i className="fa fa-shopping-cart text-xl"></i>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
