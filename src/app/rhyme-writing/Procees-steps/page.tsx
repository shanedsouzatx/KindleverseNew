'use client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Ideation',
      desc: 'Brainstorm topics, selecting intriguing real-life subjects that resonate with your readers and ignite curiosity.'
    },
    {
      id: '02',
      title: 'Research',
      desc: 'Dive deep into reliable sources, and gather data, facts, and anecdotes to provide a robust foundation.'
    },
    {
      id: '03',
      title: 'Outline',
      desc: 'Construct a structured roadmap, arranging collected material to ensure logical flow and narrative cohesion.'
    },
    {
      id: '04',
      title: 'Writing',
      desc: 'Create a seamless tapestry of truth in each chapter by skillfully weaving together scientific discoveries with deft storytelling.'
    },
    {
      id: '05',
      title: 'Revision',
      desc: 'Polish your manuscript meticulously, refining language, clarifying points, and enhancing readability.'
    },
    {
      id: '06',
      title: 'Fact-Check',
      desc: 'Validate every claim, statistic, and detail to maintain the integrity and credibility of your non-fiction work.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Our Non-Fiction Ghostwriting Process</h3>
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
