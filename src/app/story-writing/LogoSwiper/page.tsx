'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

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

const PartnerSection1 = () => {
  return (
    <section className="bg-[#ECF0F1]">
      <div className="bg-[#10212D] w-full py-4">
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
                style={{ width: 'auto', height: '4rem' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  )
}

export default PartnerSection1