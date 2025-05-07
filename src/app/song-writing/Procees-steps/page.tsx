'use client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Understanding Your Emotions',
      desc: 'Hire songwriter to brainstorm themes, melodies, and emotions and build the framework for your unique songwriting journey.'
    },
    {
      id: '02',
      title: 'Lyric Crafting',
      desc: 'Heartfelt and relatable lyrics that resonate with the chosen theme and connect with the listeners are guaranteed when you hire a professional songwriter.'
    },
    {
      id: '03',
      title: 'Melody Composition',
      desc: 'Compose a captivating melody that complements the lyrics and invokes the intended emotions.'
    },
    {
      id: '04',
      title: 'Chord Progression',
      desc: 'Develop harmonies and chord progressions that enhance the mood and dynamics of the song.'
    },
    {
      id: '05',
      title: 'Arrangement & Production',
      desc: 'To produce a well-balanced and captivating musical arrangement, arrange the instruments and voices.'
    },
    {
      id: '06',
      title: 'Final Review and Recording',
      desc: 'Fine-tune melody, lyrics and production before recording, ensuring your song captures your artistic vision perfectly.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">The Creative Process Of Our Ghost SongWriters For Hire</h3>
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
