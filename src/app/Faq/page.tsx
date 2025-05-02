'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // for toggle icons
import Image from 'next/image';

const faqs = [
  {
    question: "What is a ghostwriting company?",
    answer:
      "A ghostwriting company specializes in providing professional writing services for clients seeking to create various forms of content. Our skilled ghostwriters collaborate with clients to understand their ideas, visions, and goals.",
  },
  {
    question: "What types of content can I get from your ghostwriting company?",
    answer:
      "Our Kindle Verse company offers a diverse range of content creation services. Whether you're looking to craft novels, memoirs, articles, speeches, blog posts, or business documents, our expert ghostwriters have the versatility and expertise to fulfill your requirements.",
  },
  {
    question: "Is my confidentiality assured when working with your Kindle Verse company?",
    answer:
      "Absolutely. When you collaborate with our ghostwriting company, you can trust that your ideas, content, and personal information will be treated with the utmost discretion. We prioritize maintaining the privacy and anonymity of our clients, ensuring a secure and trustworthy partnership.",
  },
  {
    question: "How do I get started with your Kindle Verse company?",
    answer:
      "Begin by contacting us through our website, email, or phone. Our team will connect you with a dedicated project manager who will discuss your project's scope, goals, and preferences. Based on your needs, we'll match you with a skilled ghostwriter who aligns with your vision.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full px-6 py-4 font-semibold text-lg text-gray-800 hover:bg-gray-50 focus:outline-none"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              <div
                className={`px-6 pt-0 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
