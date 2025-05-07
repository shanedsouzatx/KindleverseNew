'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How Is A Short Story Different From Other Types Of Literature?",
    answer: (
      <p>
        A short story is a condensed narrative with a single primary character, theme, or incident.
        Short tales seek to tell their tale or message in a more condensed format than novels,
        which are lengthier and include numerous plotlines and characters.
      </p>
    ),
  },
  {
    question: "What Should I Consider When Hiring A Short Story Writer?",
    answer: (
      <ul className=" pl-5 space-y-1">
        <li><span className='text-[#3498DB]'>➤</span> Experience in your selected genre</li>
        <li><span className='text-[#3498DB]'>➤</span> Ability to come up with relatable and interesting plots and characters</li>
        <li><span className='text-[#3498DB]'>➤</span> Comprehension of your overall vision</li>
      </ul>
    ),
  },
  {
    question: "What Is The Process Of Working With A Short Story Writer?",
    answer: (
      <p>
        Usually, the process of great short story writers begins with a discussion of your concepts
        and narrative objectives. After that, the writer will develop an outline or draft for your
        review. Rounds of feedback assist in improving the tale till it satisfies your standards.
        Lastly, editing and revisions guarantee that the story is polished before it is finished.
      </p>
    ),
  },
  {
    question: "Can I Find Someone To Write My Life Story?",
    answer: (
      <p>
        Yes, KindleVerse offers excellent life story writing services. You can hire ghost story
        writers to create a fabricated narrative based on your real-life events with the added
        benefit of unique touches to make it appealing for the readers.
      </p>
    ),
  },
  {
    question: "What Are The Benefits Of Hiring Professional Writing Or Short Story Editing Services?",
    answer: (
      <ul className=" pl-5 space-y-1">
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Expertise:</strong> Professionals offer knowledge and experience in crafting gripping stories.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Objective Perspective:</strong> Gives a new and unbiased analysis of your story’s strengths and weaknesses.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Quality:</strong> They ensure your narrative is flawless, error-free, and well-organized.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Time-Saving:</strong> Outsourcing lets you focus on other aspects of life or work.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Feedback:</strong> Get constructive suggestions and critiques for improvements.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤</span> <strong>Market Readiness:</strong> Professionals help tailor your story for your target market or audience.
        </li>
      </ul>
    ),
  },
  {
    question: "How To Write Long Dialogue In A Story?",
    answer: (
      <p>
        To keep readers engaged, break up long dialogue with actions or thoughts.
        Start a new paragraph when the speaker or topic changes.
        Keep the conversation purposeful to the story and character development.
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
