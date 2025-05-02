"use client";

import React from "react";

const awards = [
  "/awards/axiom.png",
  "/awards/gold.png",
  "/awards/finalist.png",
  "/awards/global.png",
  "/awards/illum.png",
  "/awards/moon.png",
];

export default function AwardBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#2C3E50] to-[#3498DB] bg-center py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            AWARD-WINNING BOOK
            <br className="hidden md:block" />
            CREATION IS OUR FORTE
          </h2>
        </div>

        {/* Awards Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {awards.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Award ${index + 1}`}
              className="h-24 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
