import React from 'react'
import PartnerSection from '../Banner1/page'
import Link from 'next/link'
import Image from 'next/image'
import BookFilter from './storybooks/page'
import PartnerSection1 from './LogoSwiper/page'
import CreativeProcess from './Procees-steps/page'
import FaqSection from './FAQs/page'
import TestimonialsPage from '../Testonomial/page'

const StoryWriting = () => {
    const revisions = [
        {
          img: "/rev0.png",
          title: "Unlimited Revisions",
          desc: "Our best short story writers polish your ideas and themes, making any changes to ensure that it completely captures your vision.",
        },
        {
          img: "/rev1.png",
          title: "Customer Satisfaction",
          desc: "When you hire a story writer, rest assured that the work will be of high quality and delivered on schedule.",
        },
        {
          img: "/rev2.png",
          title: "Self-Maintained Ownership",
          desc: "When hiring great short story writers at KindleVerse, you keep ownership of the copyrights to your work.",
        },
        {
          img: "/rev3.png",
          title: "Thorough Research",
          desc: "When writing a story for you, our story writers for hire promise detailed research and thoughtfully-curated content just for you.",
        },
      ];
  return (
    <>
    <section
      className="pt-[200px] pb-16 bg-no-repeat bg-cover bg-center relative z-10"
      style={{ backgroundImage: "url('/story-writing-banner.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
              <strong>Inspiring Short Stories</strong> – Best Short Story Writers For Hire and Story Writing Services
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Every story is a journey, and the guides are our short story writers. Our
              professional short story services will turn your thoughts into captivating stories
              that will stick with your readers for a very long time because of our flawless
              command of language and excitement for creativity.
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
              src="/story-img.png"
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
              src="/story-img2.png"
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
                Hire Story Writers To Create Surprising Twists & Emotion-Packed Climaxes
              </h2>
              <p>
                A story needs more than just a series of events to be engaging. Plot twists, dramatic
                climaxes, and thrilling moments are expertly woven by our story writers for hire to keep
                readers interested until the very end.
              </p>
              <p>
                With our ghost story writing services, we are mindful of the fact that setting plays an
                equally important role in your narrative as characters do. Our best short story writers are
                skilled at creating rich, detailed worlds that transport readers and give the plot layer
                upon layers of complexity. Additionally, our{' '}
                <Link
                  href="/memoir-writing.html"
                  className="text-[#E67E22] underline hover:text-[#F39C12] transition"
                >
                  Memoir Ghostwriting Services
                </Link>{' '}
                ensure that personal stories are told with authenticity and emotional depth, making your
                narrative truly captivating.
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
          Your Vision Meets The Words Of Our Great Short Story Writers
          </h2>
          <p>
          Your doorway to a world of originality, conciseness, and impact is provided by short story writing services. Imagine capturing the spirit of a book in a single sitting by condensing its essence into a short yet impactful story. Hire a story writer and gain access to a talented team that creates brilliant short yet profound stories.
          </p>
          <p>
          Our professional ghost story writing services turn your ideas into short masterpieces, complete with captivating beginnings, unexpected turns, and satisfying endings in both short and long story writing. Additionally, our Biography Writing Services ensure that your life stories are told with precision and flair, capturing every significant moment. Hire story writers at KindleVerse to gain access to the perfect place where you can combine your creativity with the craft of storytelling, captivating readers with the allure of condensed narratives, whether your goal is to amuse, inform, or invoke feelings.
    
          </p>
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
          src="/strory-img3.png"
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
          Well, What's Stopping You? Hire A Story Writer Today!
        </h2>
        <p className="text-lg mb-8">
          Seize the moment right now, hire story writers and avail a once-in-a-lifetime chance to bring your dreams to life with the help of our professional ghost story writing services. Whether you need an{' '}
          <a
            href="/autobiography-writing.html"
            className="underline text-yellow-300 hover:text-yellow-400 transition"
          >
            autobiography ghostwriter
          </a>{' '}
          or a skilled storyteller, we have the expertise to transform your ideas into captivating narratives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
          >
            Get a Free Quote
          </a>
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
          >
            Live Chat
          </a>
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
