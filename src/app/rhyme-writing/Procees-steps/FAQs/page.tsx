'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How To Start Non-Fiction Writiing?",
    answer: (
      <p>
        TStart with a comprehensive summary: Before probing into more all-inclusive chapters or sections, ghostwriters offer an expansive rundown of the subject. Nonfiction ghostwriter makes sure the chapters are balanced. To withstand readers' interest and preserve a suave flow, each section should have stability between its length and depth.
      </p>
    ),
  },
  {
    question: "How to Hire NonFiction Ghostwriters?",
    answer: (
      <p>The most significant factor when hiring best nonfiction writers is fit. You need someone who can listen to you, who can seize your voice, and who can team up with you to find a solution. Choose reputable ghostwriting services with a track record of triumph if you select to employ one. They are the ones who have demonstrated to be enthusiastic about both enactment and repute. During the process, skillful nonfiction writers should be able to put you at ease with their communication flair. When it's appropriate, people specializing in non-fiction ghostwriting should ask about specific factors; nonetheless, they must also permit plentiful room for inventiveness and uniqueness on both sides.</p>
    ),
  },
  {
    question: "Cost of Hiring NonFiction Ghostwriters?",
    answer: (
      <p>
        Fees for a professional non-fiction writer differ; nonfiction publications can charge anywhere from $6,500 to $42,000, novels from $3,500 to $16,000, and picture books from $1,500 to $5,000. The price will fluctuate subject to the ghostwriter's experience and the category of your particular nonfiction book.
      </p>
    ),
  },
  {
    question: "How Long Does it Take to write a NonFiction Book?",
    answer: (
      <p>
        A nonfiction book takes a self-published author between six and a year to write on average. There you have it: Writing a book properly requires a minimum of 120 hours.
      </p>
    ),
  },
  {
    question: "Are KindleVerse Resources Good For NonFiction Writing Help?",
    answer: (
      <p>
       You may emphasize your business, which you do best! Ghostwriting services given by best non fiction writers might pick up your writing creative nonfiction! You'll also have more time to pay attention to other characteristics of your corporation. Using the professional ghostwriting services of KindleVerse also has the benefit of working with lineups of accomplished writers who can write in a variety of types. They offer suppleness with regard to due dates.
      </p>
    ),
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
          <h3 className="text-4xl font-bold text-white">
            FAQs About Our Ghost Story Writing Services
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
