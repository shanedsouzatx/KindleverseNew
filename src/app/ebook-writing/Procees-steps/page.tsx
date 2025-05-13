
'use client'
import { s } from 'framer-motion/client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Ideation and Planning',
      desc: 'With the assistance of our ebook writers for hire, you can easily pinpoint the main topics, target audience, and objectives of your eBook. List down ideas that are in line with your goals.'
    },
    {
      id: '02',
      title: 'Research and Content Gathering',
      desc: 'Our team conducts thorough research to gather accurate and up-to-date information relevant to your eBook’s subject matter.'
    },
    {
      id: '03',
      title: 'Outline Creation and Structuring',
      desc: 'Craft a comprehensive outline that organizes your content logically, which will go on to serve as the blueprint for your eBook’s structure and flow.'
    },
    {
      id: '04',
      title: 'Writing and Drafting',
      desc: 'Hire a ghostwriter to write your book and watch your eBook outline transform into well-crafted chapters, focusing on clarity, engagement, and alignment with your voice.'
    },
    {
      id: '05',
      title: 'Proofreading and Final Review',
      desc: 'To guarantee the highest quality standards are met, our staff completes a thorough proofreading and final review to remove any errors. For an extra layer of precision, you can also consider our book proofreaders for hire to ensure your manuscript is flawless and publication-ready.'
    },
    {
      id: '06',
      title: 'Delivery and Publishing',
      desc: 'With our custom eBook creation services, we provide the finalized e-book in the desired format, ready for distribution or publishing on digital platforms.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Our 6-Step eBook Writing Process</h3>
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
