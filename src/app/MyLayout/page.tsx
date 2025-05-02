"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
    };
  }
}

const MyLayout = ({ children }: { children: React.ReactNode }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  // const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67a3a4c83a842732607a251f/1ijbjndip";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {children}
      <div className="hidden md:block fixed right-0 top-1/3 transform -translate-y-1/2 md:flex flex-col items-end space-y-4 z-50">

        {/* WhatsApp Button */}
        {/* <div
          className="flex items-center cursor-pointer"
          onMouseEnter={() => setIsWhatsAppVisible(true)}
          onMouseLeave={() => setIsWhatsAppVisible(false)}
        >
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-tl-full rounded-bl-full">
            <FaWhatsapp size={20} />
          </div>
          <div
            className={`bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 shadow-2xl w-52 h-14 transition-all duration-1000 ease-linear ${
              isWhatsAppVisible ? "block" : "hidden"
            }`}
          >
            <Link
              href="https://wa.me/16674235532"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-950 h-full flex items-center ml-4"
            >
              (713) 545-9411
            </Link>
          </div>
        </div> */}

        {/* Chat Button */}
        <div
          className="flex items-center cursor-pointer"
          onMouseEnter={() => setIsChatVisible(true)}
          onMouseLeave={() => setIsChatVisible(false)}
        >
          <div className="flex items-center justify-center w-14 h-14 bg-[#D88700] text-white rounded-tl-full rounded-bl-full">
            <FaEnvelope size={20} />
          </div>
          <div
            className={`bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 shadow-2xl w-52 h-14 transition-all duration-1000 ease-linear ${
              isChatVisible ? "block" : "hidden"
            }`}
            onClick={() => {
              if (window.Tawk_API) {
                window.Tawk_API.maximize();
              }
            }}
          >
            <span className="text-lg text-slate-950 h-full flex items-center ml-4">
              Chat With Us
            </span>
          </div>
        </div>

        {/* Phone Button */}
        <div
          className="flex items-center cursor-pointer"
          onMouseEnter={() => setIsPhoneVisible(true)}
          onMouseLeave={() => setIsPhoneVisible(false)}
        >
          <div className="flex items-center justify-center w-14 h-14 bg-[#D88700] text-white rounded-tl-full rounded-bl-full">
            <FaPhone size={20} />
          </div>
          <div
            className={`bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 shadow-2xl w-52 h-14 transition-all duration-1000 ease-linear ${
              isPhoneVisible ? "block" : "hidden"
            }`}
          >
            <Link
              href="tel:+18583650790"
              className="text-lg text-slate-950 h-full flex items-center ml-4"
            >
              (667) 423-5532
            </Link>
          </div>
        </div>

        {/* LET'S GET STARTED Button (Updated Color) */}
        <div className="flex justify-center items-center fixed top-60 right-[-108px] w-64 p-4 bg-[#D88700] text-white rounded-tl-3xl rounded-tr-3xl transform -rotate-90 cursor-pointer">
          <span className="text-large font-bold">
            LET'S GET STARTED
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyLayout;
