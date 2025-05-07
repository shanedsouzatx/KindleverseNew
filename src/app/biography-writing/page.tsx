import React from 'react'
import PartnerSection from '../Banner1/page'
import Link from 'next/link'
import Image from 'next/image'
import BookFilter from '../story-writing/storybooks/page'
import PartnerSection1 from '../story-writing/LogoSwiper/page'
import FaqSection from '../song-writing/FAQs/page'
import TestimonialsPage from '../Testonomial/page'
import CreativeProcess from '../story-writing/Procees-steps/page'


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
      style={{ backgroundImage: "url('/biography.png')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
              <strong>Book Ghostwriting Services:</strong>  Professional, Fast, and Affordable
            </h1>
            <p className="text-gray-200 text-lg mb-8">
            At KindleVerse, we fully acknowledge the power that eBooks hold, especially given the fact that the world has shifted online. Our eBook ghostwriting services present an extensive solution for individuals and companies alike to create content that checks all three boxes: engaging, educational and informational.
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
              src="/biography-bnr-img.webp"
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
              src="/biography-writing-img1.webp"
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
              Our Professional Biography Writers Capture Your Legacy In Words
              </h2>
              <p>A story ready to be told can be found in every life. Our highly gifted biography writers for hire possess a special gift for capturing the spirit of people and transforming their struggles, victories, and experiences into engrossing stories that captivate readers.</p>
              <p>Research and storytelling techniques are combined to create a biography. In order to capture the subtleties that set the subject apart from others, our writers thoroughly investigate their life’s journey. They then weave these details into a narrative tapestry that transcends time with our professional bio writing services.</p>
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
          Hire Professional Bio Writers To Discover The Real Worth Of Your Story
          </h2>
          <p>You may connect with your audience and share your story with the world with the aid of our expert biography writing services. Although the entire process is fairly challenging, hire a writer for biography at KindleVerse to make it simple and enjoyable for you.</p>
          <p>The goal of our knowledgeable staff at KindleVerse is to document an individual's impact on their community, profession, or society. Our goal is to properly communicate the significance of any work, be it a memoir, homage biography, or the life narrative of a historical figure.</p>
          <p>Our knowledgeable biography writers for hire possess the skills needed to capture the authentic spirit of a life that has been well-lived. Be it a memoir or a biography of a remarkable historical figure, our ghostwriters wonderfully transform real-life events into powerful narratives that both inform and intrigue. For those looking to craft engaging narratives, our story writing services ensure your biography is both compelling and impactful.</p>
          <p>The aim of professional bio writing services is more than just fact-stating; they serve the purpose of brilliantly highlighting the motivations and legacy of the subject by diving deep into their soul. Our talented biography writers truly excel at this earnest process of investigation, empathy, and storytelling.</p>          </div>
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
          src="/biography-writing-img2.webp"
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
        Soo, What's Holding You Back? Hire A Biography Writer Today!
        </h2>
        <p className="text-lg mb-8">
        Seize the moment right now, hire a writer for biography and avail the most wonderful opportunity to bring your biographical dreams to life with the help of our professional bio writers!
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
