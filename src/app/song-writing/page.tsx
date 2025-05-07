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
          title: "Unlimited Revisions",
          desc: "Our online songwriters perfect your lyrics, refining them until they resonate perfectly with your vision.",
        },
        {
          img: "/rev1.png",
          title: "Customer Satisfaction",
          desc: "Top-notch quality and timely delivery by our ghost songwriters for hire assure your contentment.",
        },
        {
          img: "/rev2.png",
          title: "Self-Maintained Ownership",
          desc: "You retain the copyrights to your lyrics when you take the assistance of a song writer for hire at KindleVerse.",
        },
        {
          img: "/rev3.png",
          title: "Thorough Research",
          desc: "Keeping your ideas in focus, our online songwriters conduct in-depth research and write delightful lyrics for your song.",
        },
      ];
  return (
    <>
    <section
      className="pt-[200px] pb-16 bg-no-repeat bg-cover bg-center relative z-10"
      style={{ backgroundImage: "url('/bg-song.png')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-7/12 text-center xl:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 text-white leading-snug">
              <strong>Online Songwriters For Hire:</strong> – Turn Your Emotions Into Melodies
            </h1>
            <p className="text-gray-200 text-lg mb-8">
            Songs are the very pulse of emotions and the professional songwriting services at KindleVerse breathe life into words in the most innovative and unique way. Crafting a song that strikes through the hearts of the listeners can be a complex task. Our online songwriters combine their incredible talent for songwriting with the brilliance of artistry to create verses that stir souls.
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
              src="/song-writing-bnr.png"
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
              src="/song-img2.png"
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
                Hire Songwriters For Heartfelt Lyrics That Tell A Melodic Story
              </h2>
              <p>
              These days, everyone looks for a song writer for hire that can deliver a special and cherished treasure; a song that perfectly expresses their feelings. Song writing online services take on the task of crafting captivating lyrics in a way that goes beyond stringing together mere words. Hire a songwriter that intricately blends emotions, melodies, and rhythms, ensuring your audience resonates until the final note. The settings in your music are just as important as the lyrics themselves. Every note adds layers to the composition as our online songwriters create immersive soundscapes that take listeners to unexplored emotional places. At KindleVerse, you can find a lyricist for hire who will perform their magic and turn your song into a #1 hit. guaranteed!
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
          Our Music Ghostwriters For Hire Support Your Emotional Expression
          </h2>
          <p>
          Music has a unique power; it profoundly evokes heartfelt emotions and affects individuals in ways that not many other forms of art can. KindleVerse aims to empower new and upcoming musicians to realize their creative visions with our song writing online services. At our company, every single song writer for hire aims to compose music that has a deep emotional impact on listeners. Additionally, our hip hop writing services cater to artists looking to create impactful and emotionally resonant hip hop tracks.
          </p>
          <p>
          Our group of skilled music ghostwriters for hire transforms your ideas into a symphonic masterpiece with their distinct writing style and boundless imagination. Our online songwriters’ unwavering dedication to providing excellent quality is what keeps our long-lasting client connections strong. Hire a professional songwriter and rest assured that you will be included in every stage of the creative process.
          </p>
          <p>Our team of song writers for hire team up with clients in order to help them achieve their musical goals, especially in the case of up-and-coming musicians looking for a song writer for hire who is equipped with a thesaurus of words to complement their tunes. So why wait, hire songwriter and begin the journey to find your inner rhythm with our song writing online services right now!</p>
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
          src="/song-img3.png"
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
        What’s The Hold-Up? Hire A SongWriter Today!
        </h2>
        <p className="text-lg mb-8">
        Seize the moment right now, hire a songwriter and avail this once-in-a-lifetime chance to make your songwriting dreams come to life with our creative songwriting solutions! Additionally, our rhyme writing services are available to help you craft lyrics that perfectly complement your melodies and enhance the overall impact of your songs.
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
