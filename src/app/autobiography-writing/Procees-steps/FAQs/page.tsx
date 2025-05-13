'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is the Typical Process For Hiring A Professional Bio Writers?",
    answer: (
      <ul className="pl-5 space-y-1">
        <p>
        If you want to hire a biography writer, this is the general 5-step process:
        </p>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Initial Discussions
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong>  Contract Signing
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Supplying Materials/Interviews
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong> Draft Reviews
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Set clear communication channels.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 6:</strong> Finalization
        </li>
      </ul>
    ),
  },
  {
    question: "What Advantages Come With Hiring Writers Of Biographies? ",
    answer: (
      <p>You can ensure that your narrative is told exactly in the way you want and also save time when you hire a biography writer. They have experience in information organization, carrying out research, and writing compelling narratives that encapsulate people's lives.</p>
    ),
  },
  {
    question: "Where Can I Hire Experienced Biography Writers?",
    answer: (
      <p>Publishing support, such as preparing eBooks for different platforms like Kindle or offering advice on self-publishing, is provided by some ebook writers for hire and ghostwriting services. On ISBN acquisition and distribution possibilities, they can also offer advice
.</p>
    ),
  },
  {
    question: "What Should I Look In Professional Biography Writer?",
    answer: (
      <p>To choose a professional bio writer, look for someone with experience in the same subject’s field or genre, a solid portfolio of finished projects, effective communication skills, and a workflow that fits your requirements and timeframe.</p>
    ),
  },
  {
    question: "How Can I Pick The Best Biography Writing Service For My Project?",
    answer: (
      <p>Consider factors like their biography writing background, client references, pricing packages, flexibility in meeting deadlines, and ability to capture the special aspects of the subject's life when you hire a writer for biography.
</p>
 ), }, 
 {
  question: "Can Professional Help With Short Biography Services?",
  answer: (
    <p>Yes, by condensing significant details into a clear and compelling story, professional bio writing services help with short biographies. Highlighting significant accomplishments and effectively portraying an individual's life story to the world are their areas of expertise.

</p>
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
