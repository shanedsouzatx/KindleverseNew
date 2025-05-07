'use client'
import Image from 'next/image'

export default function CreativeProcess() {
  const steps = [
    {
      id: '01',
      title: 'Discussion',
      desc: 'To decide the possibility and course of your memoir, we talk about the imperative occasions, subjects, and frame of mind in your life.'
    },
    {
      id: '02',
      title: 'Investigation and Talk',
      desc: 'Hire a memoir writer to conduct painstaking investigation and discussions to completely capture your discrete life.'
    },
    {
      id: '03',
      title: 'The Storytelling Framework',
      desc: 'Our memoir writer for hire positions the chapters of your life in an appealing storytelling command so that it makes logic as unabridged.'
    },
    {
      id: '04',
      title: 'Composing & Outlining',
      desc: 'As we refine an assortment of annotations into captivating text permeated with your spirits, words come to life with our memoir writing services.'
    },
    {
      id: '05',
      title: 'Revision & Editing',
      desc: 'To make sure the work is exact, interconnected, and effectively delivers the fundamentals of your experiences, we revise it.'
    },
    {
      id: '06',
      title: 'Completed Manuscript',
      desc: 'Our memoir writing services deliver the completed manuscript, which presents your life story in an engaging memoir format, once you give your permission.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">Our Six-Step Composing Process For Memoirs</h3>
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
