'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How Do I choose between Individual Freelancers and Ghostwritng Companies?",
    answer: (
      <p>
      Writing and investigative journalism are two abilities that must be extant in a persuasive memoir ghostwriter. He has to ask the right questions to obtain the most intense and fascinating story possible. Trustworthy companies, such as Times Ghostwriters, are great places to begin your search because they handle corresponding you with competent ghostwriters conferring to your clear-cut writing needs. Look for writers or publishing houses who have a great backlist of memoirs, both in traditional and indie publishing. However, this is not imaginable when it comes to hiring freelance memoir writers, there can be numerous problems such as lack of trust, no portfolio, time management etc.
      </p>
    ),
  },
  {
    question: "What Are Common Mistakes tO Avoid When Writing A Memoir?",
    answer: (
      <ul className=" pl-5 space-y-1">
        <p>It usually amazes people to learn that memoir writing is an artistic nonfiction practice that more thoroughly looks like fiction than nonfiction when the writing procedure begins. There are ten common blunders that throw new memoir writer for hire off guard:</p>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Writing for retaliation
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong> Begin with your birth
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Lack of subject definition</li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong> Lack of intrigue
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Failure to engross readers
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 6:</strong> Propagandizing
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 7:</strong>  Turning yourself into a hero</li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 8:</strong> Getting too handy to the story
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 9:</strong> Being anxious about other people's sentiments
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 10:</strong>  Not writing well enough
        </li>
      </ul>
    ),
  },
  {
    question: "What Should I Look for In A Memoir GhostWriting Service?",
    answer: (
      <ul className=" pl-5 space-y-1">
      <p>
       Choosing the accurate memoir ghostwriters is indispensable for any kind of book you want to publish, but if it's a memoir, it's much more critical. This is your life story, after all, so make sure the memoir ghostwriters for hire write it and you get laterally. You need someone with whom you can reveal, who comprehends all the themes essential to write your account well, and who can promptly pick up on your opinion and thought process. Moreover, a decent memoir ghostwriting services should have the following:
      </p>
      <li>
      <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Professional know-how
      </li>
      <li>
      <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong> Assurance to apprehending your authorial voice
      </li>
      <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Relatability</li>
      <li>
      <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong>  Reassurance and forthrightness
      </li>
      <li>
      <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Eagerness
      </li>
    </ul>
  ),
  },
  {
    question: "Are Revisions And Edits Included In The Service?",
    answer: (
      <p>
       Writing, editing, and proofreading content are all encompassed in a standard ghostwriting service. Both creative summary and error repair are essential when editing an article or other piece of information. A document is usually rationalized once you've ended constituting it. This is the point at which you should measure whether the organization and content of your work may be enhanced.
      </p>
    ),
  },
  {
    question: "How Long Does Take To Write A Memoir With A Professional Writer?",
    answer: (
      <p>
        A memoir can be written in as short as 12 to 24 months, particularly if it is fascinating and remarkable and doesn't exceed 200 pages.
      </p>
    ),
  },
  {
    question: "Are the Different Types of Memoirs That Can I Write?",
    answer: (
      <ul className="pl-5 space-y-1">
        <p>
          Memoirs are a compelling way to reflect on life lessons through creative nonfiction. They blend personal storytelling with imaginative elements, making the narrative relatable to a broader audience. The different types of memoirs include:
        </p>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 1:</strong> Confessional – A deeply personal account that reveals intimate or difficult experiences.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 2:</strong> Personal – Focuses on a specific event, period, or theme in the author’s life.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 3:</strong> Portrait – Captures the essence of a particular person, place, or moment, offering a vivid depiction.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 4:</strong> Professional – Explores the author’s career path, insights, and experiences within a specific field.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 5:</strong> Public – Chronicles the author’s interactions with public life, including fame, politics, or activism.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 6:</strong> Transformational – Centers on a major life change or personal growth journey.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Step 7:</strong> Travel – Combines travel experiences with personal reflections and cultural observations.
        </li>
      </ul>
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
