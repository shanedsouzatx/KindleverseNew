'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How Do I Hire SomeOne To Write My Ebook?",
    answer: (
      <ul className="pl-5 space-y-1">
        <p>
          Hiring an eBook writer involves several key steps to ensure you find a professional who can effectively convey your message. Follow these steps to streamline the hiring process:
        </p>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Define your eBook needs.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong> Look for reviews, testimonials, or recommendations.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Research potential writers online.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong> Check portfolios and samples.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Set clear communication channels.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 6:</strong> Discuss terms and sign a contract.
        </li>
      </ul>
    ),
  },
  {
    question: "What To Expect When Collaborating with An Ebook Writers?",
    answer: (
      <p>Clear communication, frequent progress updates, and modifications based on your input are all things you scan except when working with an eBook writer. Generally speaking, the writer will meet scheduled deadlines and deliver a polished eBook that is prepared for your review and approval.
</p>
    ),
  },
  {
    question: "Aside From Writing Assistance, Can I Also Get Ebook Publishing Support?",
    answer: (
      <p>Publishing support, such as preparing eBooks for different platforms like Kindle or offering advice on self-publishing, is provided by some ebook writers for hire and ghostwriting services. On ISBN acquisition and distribution possibilities, they can also offer advice
.</p>
    ),
  },
  {
    question: "Wheat is Included In Ebook Writing Services?",
    answer: (
      <p>Writing, editing, and research are all typically included in eBook writing services that adhere to industry standards. Some services could also include extras like formatting for manuscripts, cover designs, and basic marketing advice.</p>
    ),
  },
  {
    question: "Are There Ebook Writers Who Can Handle Technical Or Academic Subject?",
    answer: (
      <p>Yes, there are ghostwriters for eBooks that have specialized knowledge in academic or technological fields. Because these writers frequently have backgrounds in specialized subjects like science, medicine, technology, or academia, their writing is guaranteed to be accurate and well-informed.</p>
 ), },  
];

export default function FaqSection1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white">
          Frequently Asked Questions
          </h3>
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out text-gray-700 ${
                  activeIndex === index ? 'max-h-[600px] pb-4' : 'max-h-0'
                }`}
              >
                <div className="pt-2">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
