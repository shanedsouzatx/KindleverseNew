
'use client'
import { s } from 'framer-motion/client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Initial Consultation',
      desc: 'As part of our custom biography writing services, we start by learning about the subject’s life, accomplishments, and the goal of the biography.'
    },
    {
      id: '02',
      title: 'Thorough Research',
      desc: 'Collecting information, anecdotes, and historical background with great care in order to create a solid foundation for the biography.'
    },
    {
      id: '03',
      title: 'Structural Blueprint',
      desc: 'Our biography authors for hire develop a narrative framework outlining the chronological and thematic aspects of the subject’s life story. Our narrative writing services ensure a compelling and well-structured biography.'
    },
    {
      id: '04',
      title: 'Narrative Creation',
      desc: 'Our professional biography writers begin the task of meticulously writing the biography, incorporating important events, feelings, and facts to create a story that is captivating to read.'
    },
    {
      id: '05',
      title: 'Refinement and Editing',
      desc: 'Careful editing for clarity, coherence and emotional resonance, ensuring a polished and engaging reading experience.'
    },
    {
      id: '06',
      title: 'Final Presentation',
      desc: 'Delivering the completed biography, ready to honor and celebrate the subject’s legacy, inspires readers for future generations.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Our 6-Step Professional Bio Writing Services Process</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Steps */}
          <div className="space-y-8">
            {steps.slice(0, 3).map((step) => (
              <div key={step.id} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <span className="text-2xl font-bold text-orange-500">{step.id}</span>
                <h4 className="text-lg font-semibold mt-2">{step.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/process-center-book.png"
              alt="process center"
              width={500}
              height={500}
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Steps */}
          <div className="space-y-8">
            {steps.slice(3).map((step) => (
              <div key={step.id} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <span className="text-2xl font-bold text-orange-500">{step.id}</span>
                <h4 className="text-lg font-semibold mt-2">{step.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
