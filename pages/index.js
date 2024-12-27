import Link from "next/link";
import React from 'react'
import ClientProducts from "../components/clientproducts/clientproducts";
import Slider from "../components/slider/slider";
import ShopBanners from "../components/shopbanner/shopbanner";
import Testimonials from "./testimonates";
import Features from "./features";
import SummerCollection from "./summercollection";
import { fetchProductsAndCategories } from "@/utils/fetchProducts";
import { getSliderData } from '@/utils/sliderData'
import { getShopData } from "@/utils/shopbannerdata";

export async function getServerSideProps() {
  const { products, categories } = await fetchProductsAndCategories();
  const slides = getSliderData();
  const banners = getShopData();

  return {
    props: {
      products,
      categories,
      slides,
      banners,
    },
  };
}
 


export default function page({ products, categories ,slides ,banners }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  return (
    <div>
      {token ? (
        <div>
          <Slider  slides={slides}/>
          <ShopBanners banners={banners} />
          <ClientProducts products={products} categories={categories} />
          <SummerCollection />
          <Testimonials />
          <Features />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome, Guest!
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Log in to access exclusive content and features tailored just for you.
              </p>
              <Link
                href="/login"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Log In
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}


