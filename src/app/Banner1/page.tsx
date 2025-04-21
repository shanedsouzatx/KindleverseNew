'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'country-flag-icons/react/3x2'

const logos = [
  '/cl-1.png',
  '/cl-2.png',
  '/cl-3.png',
  '/cl-4.png',
  '/cl-5.png',
  '/cl-6.png',
  '/cl-7.png',
  '/cl-9.png',
  '/cl-10.png',
]

const PartnerSection = () => {
  const [phone, setPhone] = React.useState('')

  return (
    <section className="bg-[#ECF0F1]">
      <div className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] w-full py-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`partner-${index}`}
                className="mx-auto h-24 w-auto object-contain"
                style={{ width: 'auto', height: '6rem' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2 className="text-3xl font-semibold mt-6 mb-2 text-center text-gray-600">Ready to Publish Your Book? Let's Get Started with the best book publishing services.</h2>

      <div className="container mx-auto px-4 mt-10 text-center">
        <form className="flex flex-wrap justify-center gap-4 pb-10">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-4 py-2 w-60 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 w-60 text-black"
          />
          <div className="w-60">
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!w-full !py-2 !pl-10 !text-black"
              buttonClass="!bg-white"
              containerClass="!w-full"
              dropdownClass="!text-black"
            />
          </div>
          <select className="border rounded px-4 py-2 w-60 text-black">
            <option>Book Writing</option>
            <option>Editing</option>
            <option>Publishing</option>
          </select>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}

export default PartnerSection
