"use client";

import React from "react";
import { FaPenNib, FaBookOpen, FaPaintBrush, FaBullhorn, FaChalkboardTeacher, FaChartLine, FaPencilRuler, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Ghostwriting",
    icon: <FaPenNib size={32} />,
    text: "Let our ghostwriters turn your vision into a reality. Working behind the scenes, they’ll craft your story with precision, capturing your voice and ideas as if it were their own. Whether it’s fiction, memoir, or non-fiction, our talented team will create an authentic manuscript that feels like you wrote every word.",
    bg:"#ECF0F1",
  },
  {
    title: "Book Editing",
    icon: <FaBookOpen size={32} />,
    text: "A great story needs a sharp editor. Our skilled editors will fine-tune your manuscript, honing the plot, strengthening characters, and smoothing the flow. With careful attention to detail, we’ll ensure your book is polished to perfection, ready to fascinate readers.",
  },
  {
    title: "Cover Designing",
    icon: <FaPaintBrush size={32} />,
    text: "First impressions matter, especially when it comes to books. Our expert designers will create a cover that not only stands out but also reflects the heart of your story. At a glance, your visuals will attract readers and make an unforgettable impression.",
    bg: "#ECF0F1",
  },
  {
    title: "Publishing",
    icon: <FaBullhorn size={32} />,
    text: "Let us handle the complexities of publishing. From formatting to distribution, we’ll manage the entire process to ensure your book lands in the right places and reaches the right audience. With our seamless publishing services, you can focus on what matters—your story.",
  },
  {
    title: "Book Coaching",
    icon: <FaChalkboardTeacher size={32} />,
    text: "Writing a book can be a long and challenging journey, but you don’t have to go it alone. Our experienced book coaches will be there every step of the way, offering guidance, motivation, and constructive feedback. Together, we’ll turn your writing goals into a finished product.",
    
  },
  {
    title: "Book Marketing",
    icon: <FaChartLine size={32} />,
    text: "In a crowded book market, standing out is key. Our strategic marketing services will create buzz around your book, reaching your target audience through personalized campaigns designed to boost visibility and engagement. Watch your readership grow with our expert marketing team.",
    bg: "#ECF0F1",
  },
  {
    title: "Illustration Design",
    icon: <FaPencilRuler size={32} />,
    text: "Let your book’s visuals match its story. Our talented illustrators will bring your words to life with stunning artwork that enhances your narrative and appeals to readers of all ages. Make your book unforgettable with our unique illustration services.",
    
  },
  {
    title: "Beta Reader Testing",
    icon: <FaUsers size={32} />,
    text: "Get real feedback before going to print. Our beta reader testing service taps into diverse groups of readers to provide honest insights and suggestions, helping you fine-tune your manuscript for maximum impact. Make your book the best it can be with reader-driven improvements.",
    bg: "#ECF0F1",
  },
];

const ServiceCards = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={i}
            style={{ backgroundColor: service.bg }}
            className="h-80 p-4 flex flex-col items-center justify-start text-center border border-white"
          >
            <div className="text-orange-500 mb-2">{service.icon}</div>
            <h3 className="text-lg font-semibold text-[#e67e22] mb-2">{service.title}</h3>
            <div
className="text-sm text-gray-600 overflow-y-auto px-6 py-6scroll-smooth custom-scrollbar"
  style={{ maxHeight: "120px" }}
>
  <p>{service.text}</p>
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
