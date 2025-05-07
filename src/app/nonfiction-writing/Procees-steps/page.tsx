'use client'
import Image from 'next/image'

export default function CreativeProcess1() {
  const steps = [
    {
      id: '01',
      title: 'Idea Understanding',
      desc: 'Share your concepts, themes, and emotions with us. Our rhyme writers for hire work to comprehend your ideas and poetic objectives.'
    },
    {
      id: '02',
      title: 'Mood and Tone Setting',
      desc: 'Define the mood and tone you want to convey in your ghost rhymes. We align the poetic elegance with your desired sentiments.'
    },
    {
      id: '03',
      title: 'Crafting Verses',
      desc: 'Our expert rhyme writers craft engaging verses that resonate with your audience. Each line is precisely shaped for impact.'
    },
    {
      id: '04',
      title: 'Wordplay and Rhythm',
      desc: 'We infuse wordplay, rhythm, and rhyme schemes to enhance the lyrical flow. Verses come alive with captivating cadence.'
    },
    {
      id: '05',
      title: 'Collaborative Refinement',
      desc: 'Our rhyme writers for hire share the draft with you, encouraging criticism and recommendations. This collaborative process ensures your artistic input is valued.'
    },
    {
      id: '06',
      title: 'Final Polishing',
      desc: 'We refine the ghost rhymes with your input, ensuring they align with your vision. The final result: verses that truly represent you and captivate listeners. For those looking to create dynamic and powerful lyrics, our hip hop writing services are also available to perfectly complement your rhyme needs.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Our 6-Step Rhyme Writing Process</h3>
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
