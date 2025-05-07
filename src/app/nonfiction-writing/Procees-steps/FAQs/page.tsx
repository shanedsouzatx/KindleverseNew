'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How Can I Access The Quality Of A Rhyme Writer?",
    answer: (
      <p>
        Well-chosen, powerful, and captivating sentences let the reader sense the writer's emotions and intentions. A ghost rhyme becomes memorable when the right words are chosen, considering their meaning, implications, sounds, and even appearance. The feelings that are hidden between the lines are guided by the words. If a poet is able to incorporate these things in a poem, then he is certainly a good poem writer.
      </p>
    ),
  },
  {
    question: "What should I Except In Terms Of Revisions And Edits?",
    answer: (
      <p>To improve material, revising entails adding, removing, moving, or altering information. The rhyme writers for hire reviews the words and sentences he used to convey the ideas again during editing, making any necessary corrections to the grammar, punctuation, or sentence structure.</p>
    ),
  },
  {
    question: "Do Ryme Writers Works On Special Projects?",
    answer: (
      <p>Yes, they work on commercial projects and get paid accordingly. However, he has to be an expert, experienced ghostwriter with swift industry or business research skills. A project manager/editor with a sturdy promise to meet deadlines and an eye for first-class content is what he should have exactly for commercial projects.</p>
    ),
  },
  {
    question: "Can I Hire A Rhyme Writer For A Song?",
    answer: (
      <p>Indeed! Hiring a professional rhyme writer is a great choice if you need help with rhymes. Hiring exceptional rhyming writers is possible online through specialized platforms or the other thing could be done to hire a rhyme writing service such as KindleVerses. The word will be charged to you by a lyricist; the rate starts at $30 per song and goes up to $500–600 or more, depending on experience and skill. Though there are different alternatives and extras available, such as CR (copyright release), video, commercial vs. personal use, and so forth, songwriters and composers charge comparable amounts.</p>
    ),
  },
  {
    question: "What Are the Mandatory Steps to Hire a Ghost Rhyme Writer?",
    answer: (
      <ul className="pl-5 space-y-1">
        <p>
          Hiring a ghost rhyme writer requires a structured approach to ensure you find the right fit for your project. Follow these mandatory steps to streamline the process:
        </p>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Recognize the exact needs that your project requires.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong> Write a compelling job description to attract the best applicants.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Review the writing samples submitted by your applicants.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong> Narrow down the prospects during the interview process.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Set clear communication channels.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 6:</strong> Submit an offer to your top choice and complete the process.
        </li>
      </ul>
    ),
  },  
  {
    question: "Can I hire A Ghostwriter For Different Genres Of Rhyme Writing?",
    answer: (
      <p>Undeniably! Hiring a professional rhyme writer is a great choice if you need help with rhymes of different categories. Hiring exceptional rhyming writers is possible online through specialized platforms or the other thing could be done to hire a rhyme writing service such as KindleVerses.</p>
    ),
  },
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
