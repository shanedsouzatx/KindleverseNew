'use client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Idea Generation',
      desc: 'Hire a story writer to think up original ideas, themes and characters to lay the groundwork of your fascinating story.'
    },
    {
      id: '02',
      title: 'Outline Creation',
      desc: 'Create a well-organized framework that outlines the plot\'s development and guarantees cohesion and flow.'
    },
    {
      id: '03',
      title: 'Character Development',
      desc: 'Ghost story writers breathe life into characters by defining their personalities, motivations, and arcs for reader engagement.'
    },
    {
      id: '04',
      title: 'Writing the Draft',
      desc: 'Create a vivid tale by infusing dialogues, emotions, and descriptions to improve the reader\'s immersion.'
    },
    {
      id: '05',
      title: 'Revision and Polishing',
      desc: 'Hire story writers to refine your draft, fine-tuning language, pacing, and plot intricacies for a seamless reading experience.'
    },
    {
      id: '06',
      title: 'Final Review and Delivery',
      desc: 'Prior to delivery, our great short story writers run a final review of your story to check for coherence and consistency of content.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Exploring the Creative Process Of The Leading Ghost Story Writing Services</h3>
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
              width={320}
              height={320}
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
