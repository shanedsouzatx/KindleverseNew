import React from 'react'
import PartnerSection from '../Banner1/page'
import Link from 'next/link'
import Image from 'next/image'
import BookFilter from '../story-writing/storybooks/page'
import PartnerSection1 from '../story-writing/LogoSwiper/page'
import FaqSection from './FAQs/page'
import TestimonialsPage from '../Testonomial/page'
import CreativeProcess from './Procees-steps/page'


const StoryWriting = () => {
    const revisions = [
        {
          img: "/rev0.png",
          title: "No Limits On Edits",
          desc: "Unrestrained amendments allow you to perfect and adapt your words to fit your visualization.",
        },
        {
          img: "/rev1.png",
          title: "Client Contentment",
          desc: "Rapid delivery and excellent writing promise your satisfaction with memoir ghostwriter.",
        },
        {
          img: "/rev2.png",
          title: "Autonomous Ownership",
          desc: "The copyright to the content is retained by the author; your work is absolutely yours.",
        },
        {
          img: "/rev3.png",
          title: "Comprehensive Investigation",
          desc: "Widespread enquiry and particular content creation, by our memoir writer for hire!",
        },
      ];
  return (
    <>
    <section
      className="pt-[200px] pb-16 bg-no-repeat bg-cover bg-center relative z-10"
      style={{ backgroundImage: "url('/memoir-writing-banner.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
              <strong>Memoir Ghostwriting Services:</strong> Transform Your Writing Into Engaging Stories
            </h1>
            <p className="text-gray-200 text-lg mb-8">
            Our extremely capable team of ghostwriters for memoir includes capable writers with an attention on memoir masterpieces. So, do you want to keep your personal tale private? Employ our memoir writers to meritoriously express your storyline.
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
              src="/memoir-writing-bnr.png"
              alt="Memoir Illustration"
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
              src="/memoir-img1.png"
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
              Hire A Memoir Writer Who Knows Your Narrative
              </h2>
              <p>
              Every memoir ghostwriter for memoir writes is as exceptional as every life. Our memoirists discover each section of your life, investigating the turning points, experiments, and accomplishments that best define you. Our memoir writer for hire says that by blending trustworthiness and novelty, your memoir carries your expression and spirits.
              </p>
              <p>
              Our memoir ghostwriters for hire are concerned about your former brawls and how they swayed you. The most appropriate words are carefully chosen when you hire a memoir writer to deliver your experience. With their wonderful language and unlimited artistic countenance of sentiments, our writers aim for brilliance.
              </p>
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
          With Our Memoir Writing Services & Ghostwriter For Memoir, You Can Share Your Acumen!
          </h2>
          <p>
          Our memoir writers are chiefs in see-through the core of your journey by eliminating the layers from your life. We conduct in-depth research and meetings to gather the subtle details that back to the entreaty of your story. Our writing occupies readers in your familiarities and invigorates your remembrances. Additionally, our story writing expertise ensures your memoir is engaging and resonates with readers on a deep, personal level.
          </p>
          <p>Memoirs are cross-generational bequests, not simply assemblages of narratives. Your memories won't be over and done over time, thanks to our memoir writing services. We dexterously syndicate the fragments of your life to create a tale that your loved ones will treasure for a very long time.</p>
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
          src="/memoir-img2.png"
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
        What Is Preventing You From Availing Our Memoir Writing Services?
        </h2>
        <p className="text-lg mb-8">
        Now is the picture-perfect time to take advantage of the chance to fulfill your dreams.
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
