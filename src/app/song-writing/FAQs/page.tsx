'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What Does an Online SongWriter Do?",
    answer: (
      <p>
       Seize the moment right now, hire a songwriter and avail this once-in-a-lifetime chance to make your songwriting dreams come to life with our creative songwriting solutions! Additionally, our rhyme writing services are available to help you craft lyrics that perfectly complement your melodies and enhance the overall impact of your songs.
      </p>
    ),
  },
  {
    question: "What Are the Benefits Of Ghost SongWriters For Hire?",
    answer: (
      <p>The two advantages of working with a ghostwriter who offers lyric writing online include creative control and protection of privacy. For a variety of creative or personal reasons, an artist might want full freedom to create the song without having their name revealed to the public.</p>
    )
  },
  {
    question: "How Can I Hire A Professional Songwriter Who Provides GhostWriting Services?",
    answer: (
      <p>
       Online directories, and freelance platforms and personal recommendations or online reviews are the most appropriate places to look for a ghost song writer for hire. Look for experienced ghostwriters who guarantee privacy and who have a songwriting portfolio showcasing their versatility.
      </p>
    ),
  },
  {
    question: "Are There Ghost SongWriters Available Who Can write Music Anonymously?",
    answer: (
      <p>
       In order to keep the attention on the music and its message rather than the writer’s identity, many ghost songwriters operate under pseudonyms. This is the best option for artists who prefer to keep their creative processes private. Hire songwriters online and ensure secrecy.
      </p>
    ),
  },
  {
    question: "How Can I Ensure The Song Reflect My Vision and Voice?",
    answer: (
      <p>
        To make sure the song captures your vision and voice, stay in constant contact with the lyricist for hire. Throughout the writing process, give thorough instructions and provide criticism to help shape the lyrical direction and make sure it reflects your style goals.
      </p>
    ),
    answer2: (
      <ul className=" pl-5 space-y-1">
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Expertise:</strong> Professionals offer knowledge and experience in crafting gripping stories.
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Objective Perspective:</strong> Gives a new and unbiased analysis of your story’s strengths and weaknesses.
        </li>
        <li>
          <span className='text-[#3498DB]'>➤ </span><strong>Quality:</strong> They ensure your narrative is flawless, error-free, and well-organized.
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Time-Saving:</strong> Outsourcing lets you focus on other aspects of life or work.
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Feedback:</strong> Get constructive suggestions and critiques for improvements.
        </li>
        <li>
        <span className='text-[#3498DB]'>➤ </span><strong>Market Readiness:</strong> Professionals help tailor your story for your target market or audience.
        </li>
      </ul>
    ),
  },
  {
    question: "Do Song Writing Services Also Include Music Production?",
    answer: (
      <p>
        Yes, song writers for hire that turn lyrics into fully produced songs online also do provide music production services. This all-inclusive strategy typically used by a lyricist for hire guarantees consistency from start to finish and also speeds up the entire creative process.
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
