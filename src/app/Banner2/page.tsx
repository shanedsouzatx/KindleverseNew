'use client'

import React from 'react'
import { BookOpen, PenTool, UploadCloud, Megaphone } from 'lucide-react'

const services = [
  {
    icon: <BookOpen className="h-8 w-8 text-[#E67E22]" />,
    title: 'Book Writing',
    description:
      "Our team of experienced writers will help you craft a compelling and engaging story that resonates with your readers. We'll work with you to create characters that your readers will fall in love with and a story that they won't be able to put down.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-[#E67E22]" />,
    title: 'Book Editing',
    description:
      "Our professional editors will polish your manuscript to perfection, ensuring it's free of errors and reads smoothly. We'll also review your story to provide you with feedback and suggestions, helping you take it to the next level.",
  },
  {
    icon: <UploadCloud className="h-8 w-8 text-[#E67E22]" />,
    title: 'Book Publishing',
    description:
      'Our self publishers take care of all aspects of book publishing, from designing a beautiful cover to formatting your manuscript for print and digital formats. With our global distribution network, your book will be available to readers worldwide.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-[#E67E22]" />,
    title: 'Book Marketing',
    description:
      'Our New York Publishers and marketing team will help you promote your book to the right audience using a combination of traditional and digital marketing strategies. From social media to book tours, we will help you build your brand and create a loyal following of readers.',
  },
]

const BookServicesSection = () => {
  return (
    <section className="bg-[#F2F4F5] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Book Publishing Experts – Harness Your Book&apos;s Potential
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Your First Step Toward Becoming a Bestseller Begins here, at our agency
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-sm text-center flex flex-col items-center justify-start bg-white border border-blue-100 hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 max-h-32 overflow-y-auto px-2 scroll-smooth custom-scrollbar">
                {service.description}
              </p>
              <button className="mt-4 text-[#E67E22]  text-sm  hover:underline transition duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookServicesSection
