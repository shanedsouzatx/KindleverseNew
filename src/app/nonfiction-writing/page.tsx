import React from 'react'
import PartnerSection from '../Banner1/page'
import Link from 'next/link'
import Image from 'next/image'
import TestimonialsPage from '../Testonomial/page'
import BookFilter from '../story-writing/storybooks/page'
import PartnerSection1 from '../story-writing/LogoSwiper/page'

import CreativeProcess1 from './Procees-steps/page'
import FaqSection1 from './Procees-steps/FAQs/page'


const StoryWriting = () => {
    const revisions = [
        {
          img: "/rev0.png",
          title: "Unlimited Revisions",
          desc: "Infinite amendments, fashioning your words until faultlessness, personalized to your visualization.",
        },
        {
          img: "/rev1.png",
          title: "Customer Satisfaction",
          desc: "Prompt delivery and high-quality writing by great non fiction writers help guarantee your satisfaction.",
        },
        {
          img: "/rev2.png",
          title: "Self-Maintained Ownership",
          desc: "The copyright to the content is kept by the non fiction writers; your work is entirely yours.",
        },
        {
          img: "/rev3.png",
          title: "Thorough Research",
          desc: "Thorough research, and precise content creation, curated just for you by a non-fiction writer!",
        },
      ];
  return (
    <>
    <section
      className="pt-[200px] pb-16 bg-no-repeat bg-cover bg-center relative z-10"
      style={{ backgroundImage: "url('/non-fiction-banner.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
              Professional Non-Fiction Ghostwriters For Hire In USA
            </h1>
            <p className="text-gray-200 text-lg mb-8">
            Here at KindleVerse, our non fiction writers bring nonfiction to life over narratives. Our Non-Fiction Ghostwriters for Hire are professionals in renovating your thoughts, familiarity, and opinions into fascinating tales. Check out our non-fiction writing services given by professional non-fiction writers to add more affluence to your stories and offer captivating content that will hypnotize, notify, and encourage your readers.
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
              src="/non-fiction-img.png"
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
              src="/non-fiction-img2.png"
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
              Why Pick Our Ghostwriting Services From Non Fiction Writers?
              </h2>
              <p>
              Incomparable non fiction writing requires more than just handing over knowledge; it necessitates a vigilant stability of exactness, inventiveness, and intelligibility. A group of talented non fiction ghostwriters that concentrate in translating challenging ideas into clear and appealing non-fiction writing service is amassed by best non fiction writers. Our nonfiction ghostwriting services guarantee that your message extends to your wished-for audience by causing a widespread range of subjects, from science and history to self-help and business.
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
          For Gripping Non Fiction Ghostwriting, Work With A Non Fiction Ghostwriter
          </h2>
          <p>
          Non-fiction is an art form grounded in reality—exploring events that resonate with accuracy and significance. These narratives blend truth and storytelling, capturing the essence of current events with a touch of creativity. Every non-fiction writing assists as a prism through which authenticity is perceived, concentrated both accurately and individually. For those looking to enhance their narratives, our story writing services ensure your non-fiction work is engaging and impactful.
          </p>
          <p>
          Perversely, nonfiction writing surpasses simple evidence by resuscitating historical occasions, abridging them into chapters that stand single-handedly, and contributing a gaudy standpoint on people, places, and times gone by. The gimmick lies in the non fiction writers’ aptitude to interlace in particulars and explanations that make the theme come to life, creating an appealing tale that is both informative and fascinating.
          </p>
          <p>The supreme nonfiction ghostwriting services are delivered by our non-fiction writer, your nonfiction lighthouse. Our squad of highly capable nonfiction ghostwriters do the lot diligently to convert your accepted wisdom into appealing nonfiction book writing that book lovers will find pleasing. Your message breaks through the written word and puts forward a pleasing linking with the addressees, thanks to our unparalleled nonfiction writing services. Come and discover the empire of nonfiction writing with our non-fiction ghostwriter, where imagination encounters authenticity and your story takes center stage. Additionally, our ebook writing services ensure your non-fiction work reaches a wide audience, offering a seamless transition from manuscript to published e-book.</p>
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
          src="/non-fiction-img3.webp"
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
        What’s Stopping You?
        </h2>
        <p className="text-lg mb-8">
        The paramount time is today; grab the instant and make your imaginings come spot-on!
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
    <CreativeProcess1 />
    <FaqSection1 />
    <TestimonialsPage />

    </>
  )
}

export default StoryWriting
