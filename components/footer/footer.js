'use client'
import React from "react";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-3 pt-[80px] pb-[40px] lg:px-9 border-t-2 bg-footerColor text-white">
      <div className="footer_top">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Footer Logo and Social Icons */}
          <div className="widget">
            <div className="footer_logo">
              <Link href="#"><img src="/images/flogo.png" alt="logo" className="mb-4" /></Link>
            </div>
            <p>If you are going to use Lorem Ipsum, be sure there isn't hidden text.</p>
            <div className="widget mt-4">
              <ul className="social_icons flex space-x-4">
                <li><Link href="#"> <CiYoutube /></Link></li>
                <li><Link href="#"> <FaTwitter /></Link></li>
                <li><Link href="#"> <SiFacebook /></Link></li>
                <li><Link href="#"> <SiLinkedin /></Link></li>
                <li><Link href="#"> <FaGooglePlusG /></Link></li>
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="widget">
            <h6 className="widget_title font-bold mb-2">Useful Links</h6>
            <ul className="widget_links space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href= "/terms-condition">Conditions and Terms</Link></li>
              <li><Link href="#">Location</Link></li>
              <li><Link href="#">Affiliates</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="widget">
            <h6 className="widget_title font-bold mb-2">Category</h6>
            <ul className="widget_links space-y-2">
              <li><Link href="#">Men</Link></li>
              <li><Link href="#">Women</Link></li>
              <li><Link href="#">Kids</Link></li>
              <li><Link href="#">Best Seller</Link></li>
              <li><Link href="#">New Arrivals</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div className="widget">
            <h6 className="widget_title font-bold mb-2">My Account</h6>
            <ul className="widget_links space-y-2">
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Discount</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Orders History</Link></li>
              <li><Link href="#">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="widget">
            <h6 className="widget_title font-bold mb-2">Contact Info</h6>
            <ul className="contact_info contact_info_light space-y-4">
              <li>
                <i className="ti-location-pin"></i>
                <p>123 Street, Old Trafford, New South London, UK</p>
              </li>
              <li>
                <i className="ti-email"></i>
                <a href="mailto:info@sitename.com">info@sitename.com</a>
              </li>
              <li>
                <i className="ti-mobile"></i>
                <p>+ 457 789 789 65</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
