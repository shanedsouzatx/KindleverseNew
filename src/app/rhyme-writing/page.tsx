import React from 'react'
import PartnerSection from '../Banner1/page'
import Link from 'next/link'
import Image from 'next/image'
import TestimonialsPage from '../Testonomial/page'
import BookFilter from '../story-writing/storybooks/page'
import PartnerSection1 from '../story-writing/LogoSwiper/page'

import CreativeProcess from './Procees-steps/page'
import FaqSection from './Procees-steps/FAQs/page'

const StoryWriting = () => {
    const revisions = [
        {
          img: "/rev0.png",
          title: "Unlimited Revisions",
          desc: "Unrestrained revisions let you to perfect and make specially your words to fit your idea.",
        },
        {
          img: "/rev1.png",
          title: "Customer Satisfaction",
          desc: "Quick delivery and first-class rhyme writing assure your satisfaction.",
        },
        {
          img: "/rev2.png",
          title: "Autonomous Ownership",
          desc: "The copyright to the content is kept by the author; your work is completely yours.",
        },
        {
          img: "/rev3.png",
          title: "Thorough Research",
          desc: "Thorough research, and precise content creation, curated English rhymes writing just for you.",
        },
      ];
  return (
    <>
    <section
      className="pt-[200px] pb-16 bg-no-repeat bg-cover bg-center relative z-10"
      style={{ backgroundImage: "url('/rhyme-banner.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
            Take Your Ghost Rhymes To The Next Level
            </h1>
            <p className="text-gray-200 text-lg mb-8">
            Hire our rhyme writers now and experience the best rhyme writing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <a
                href="javascript:;"
                className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
              >
                Get Started
              </a>
              <a
                href="javascript:;"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
              >
                Free Consultation
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="xl:w-5/12 flex justify-center items-center">
            <img
              src="/rhyme-bnr-img.png"
              alt="Story Writing Illustration"
              className="max-w-[400px] w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
    <PartnerSection />
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full resource-box-img z-[-1]" />
            <Image
              src="/rhyme-img1.png"
              alt="resource-box-img"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:w-1/2">
            <div className="text-gray-800 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
              Why Cherry-Pick Our Rhyme Writing Services For A Treasured Rhyme?
              </h2>
              <p>Our professional ghost rhyme writers are well-versed in punning, meter, and tempo. Turning ideas into rhymes requires skill and finesse. They infuse your concepts and emotions into verses of ghost rhymes that evoke emotions, tell stories, and make your words come alive.

</p> 
<p>Our professional rhyme writers are mindful that several categories call for numerous lyrical tactics. From heartfelt ballads to energetic rap verses, we tailor our rhyme writing services to match your artistic vision and audience preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BookFilter />
    <section className="py-20 bg-white">
  <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-10">
      
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
          Ghost Rhyme Writing Services By Our Experts
          </h2>
          <p>
          Rhyme writing is a skill that can charm and enchant people remarkably. Rhyme writing is a key factor that can set you apart and leave a lasting mark. A likable jingle can meritoriously and tersely communicate a message, nurturing audience commitment and the development of a resilient brand identity.
          </p>
          <p>Our rhyme writers have years of hands-on experience creating content that helps our clients easily deliver their message. KindleVerse hires ghost rhyme writers who offer poem writing services that bring into line with your goals and brand. Whether you require a memorable song to market your brand, a reminiscent verse to prompt your sentimentalities, or a melody that attaches with your spectators, our brilliant rhyme writers can support you in generating the idyllic rhyme for your requirements. For those looking to create compelling lyrics, our #accordion song writing services are also available to perfectly complement your rhyme needs.</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
              <a href="#" className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Get A Free Quote <i className="fa fa-arrow-circle-right ml-2"></i>
              </a>
              <a href="tel:8555877621" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
            Live Chat <i className="fa fa-phone ml-2"></i>
              </a>
            </div>
      </div>


      {/* Right Image Section */}
      <div className="lg:w-1/2 relative">
        <div className="absolute top-0 left-0 w-full h-full resource-box-img z-[-1]" />
        <Image
          src="/rhyme-img2.png"
          alt="resource-box-img"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
<section className="py-20 text-white text-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {revisions.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain mx-auto"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="pt-10 pb-10 bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Take Your Ghost Rhymes To The Next Level
        </h2>
        <p className="text-lg mb-8">
        Hire our rhyme writers now and experience the best rhyme writing services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#"
            className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
          >
            Live Chat
          </Link>
        </div>
      </div>
    </section>
    <PartnerSection1 />
    <CreativeProcess />
    <FaqSection />
    <TestimonialsPage />

    </>
  )
}

export default StoryWriting
