import Image from 'next/image';
import React from 'react';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import PartnerSection from '../Banner1/page';
import ServicesSection from '../Discount/page';

const HeroSection: React.FC = () => {
  return (
    <>
    <section className="mt-12 bg-[#ECF0F1] text-white pb-10 lg:py-20 flex items-center relative overflow-hidden">

      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
              About Us
            </h1>
            <p className="text-lg mb-6 text-gray-800 animate-fadeIn delay-100">
            We are a diverse group of dedicated writers, managers, editors, and designers dedicated to bringing your visions to life.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#" className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Discuss your project <i className="fa fa-arrow-circle-right ml-2"></i>
              </a>
              <a href="tel:8555877621" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Call Now <i className="fa fa-phone ml-2"></i>
              </a>
            </div>
            <a href="#" className="flex items-center space-x-3">
              {/* heroIcon */}
              <Image 
                          src="/heroIcon.png"
                          alt="HeroIcon"
                          width={42}
                          height={32}
                          className="w-[40] h-[36] text-[#E67E22]"
                        />
              <div>
                <span className='text-gray-600 text-[12px] hover:text-[#E67E22]'>24/7 Available</span>
                <p className="font-bold text-gray-600 hover:text-[#E67E22]">Live Chat</p>
              </div>
            </a>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Animated Blob */}
            <div className="absolute top-0 left-0 w-full">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#29A0D2" />
                    <stop offset="100%" stopColor="#126196" />
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)">
                  <animate attributeName="d" dur="5000ms" repeatCount="indefinite"
                    values="M423.5,300Q423,350,394,399Q365,448,307.5,459Q250,470,196.5,452.5Q143,435,113,390.5Q83,346,64,298Q45,250,65,202.5Q85,155,127.5,133.5Q170,112,210,96Q250,80,292,92.5Q334,105,376,129Q418,153,421,201.5Q424,250,423.5,300Z;
                            M420.871,292.11301Q395.65843,334.22602,370.33902,374.81322Q345.01962,415.40043,297.50981,447.43241Q250,479.46439,197.5516,455.6548Q145.1032,431.8452,132.45458,378.40661Q119.80596,324.96802,81.35138,287.48401Q42.8968,250,55.53561,197.7678Q68.17442,145.53561,116.45821,123.50981Q164.74201,101.48401,207.371,94.9484Q250,88.41279,310.40298,64.63263Q370.80596,40.85246,410.17697,87.98764Q449.54797,135.12282,447.81577,192.56141Q446.08358,250,420.871,292.11301Z;
                            M466.5,307Q447,364,409,412Q371,460,310.5,450.5Q250,441,206,421.5Q162,402,103.5,385Q45,368,58.5,309Q72,250,67.5,196Q63,142,96.5,91.5Q130,41,190,28.5Q250,16,300.5,45.5Q351,75,376.5,118.5Q402,162,444,206Q486,250,466.5,307Z;
                            M461,304Q436,358,388,381.5Q340,405,295,429.5Q250,454,198,442.5Q146,431,101.5,396Q57,361,61.5,305.5Q66,250,50,187.5Q34,125,92,101Q150,77,200,69Q250,61,309.5,52Q369,43,412,87.5Q455,132,470.5,191Q486,250,461,304Z;
                            M423.5,300Q423,350,394,399Q365,448,307.5,459Q250,470,196.5,452.5Q143,435,113,390.5Q83,346,64,298Q45,250,65,202.5Q85,155,127.5,133.5Q170,112,210,96Q250,80,292,92.5Q334,105,376,129Q418,153,421,201.5Q424,250,423.5,300Z;">
                  </animate>
                </path>
              </svg>
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-12 xl:-right-5 lg:-right-8 right-3 bg-white rounded-full border-4 border-[#3498DB] w-32 h-32 flex flex-col justify-center items-center text-center shadow-xl z-20">
              <p className="text-sm font-bold text-black">UP TO</p>
              <p className="text-2xl font-extrabold text-black leading-none">50%</p>
              <p className="text-sm font-bold text-black">OFF</p>
            </div>

            {/* Form Box */}
            <div className="relative z-10 flex items-center justify-center mt-10 lg:mt-0">
              <div className="w-full max-w-md bg-white/10 border border-white rounded-xl p-6 backdrop-blur-md text-white">
                <h3 className="text-center text-lg text-gray-800 font-semibold mb-4">
                  Avail our Limited Time Offer right away!
                </h3>

                <form method="POST" action="form-handler.php" className="space-y-4">
                  <input type="hidden" name="url" value="index.html" />
                  <input type="hidden" name="domain" value="www.timesghostwriters.com" />
                  <input type="hidden" name="subject" value="Banner Form (www.timesghostwriters.com)" />

                  <div className="relative">
                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="w-full pl-10 pr-4 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    />
                  </div>

                  <div className="relative">
                    <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      minLength={10}
                      maxLength={12}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full pl-10 pr-4 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="About Your Project"
                    required
                    className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-[#E67E22] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition"
                  >
                    Get A Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* BREADCRUMBS */}
    <section className="py-4 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <ul className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a href="/" className="hover:underline text-blue-600">
            Home
          </a>
        </li>
        <li>
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        </li>
        <li>About Us</li>
      </ul>
    </div>
  </section>

  {/* ABOUT SECTION 1 */}
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-2 text-gray-800">Who We Are</h5>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Once Upon A Time…</h2>
            <p className="mb-4 text-gray-700">
            KindleVerse began as a small group of eager young adults who were brought together by their shared passion for writing and coffee. We were literature aficionados, wordsmiths, voracious readers, and cult classic nerds. We spent hours composing prompts, short stories, slam poetry, fan fiction, and anything else that had to do with literature and creative writing in any manner.
            </p>
            <p className="text-gray-700">
            Colleagues, friends, friends of friends, and even strangers with whom we debated on the internet would often notice our zeal and seek our assistance with their theses, project reports, blogs, and other projects. Slowly but steadily, the spark developed into a blaze, and we began to have difficulty keeping our good promises.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/aboutus-1.png"
            alt="About KindleVerse"
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>
  </section>

  {/* ABOUT SECTION 2 */}
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-2 text-gray-800">What We Do</h5>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Not Limited To Ghostwriting</h2>
            <p className="mb-4 text-gray-700">
              Other than ghostwriting the book, we provide, but are not limited to, the following services:
            </p>
            <ul className="list-inside space-y-2 text-gray-700 mb-4">
              <li><span className='text-[#3498DB]'>➤ </span> Book Publishing</li>
              <li><span className='text-[#3498DB]'>➤ </span> Book Marketing</li>
              <li><span className='text-[#3498DB]'>➤ </span> Book Cover Designs</li>
              <li><span className='text-[#3498DB]'>➤ </span> Book Printing & Shipping</li>
              <li><span className='text-[#3498DB]'>➤ </span> Author Website Development</li>
              <li><span className='text-[#3498DB]'>➤ </span> Book Translations</li>
              <li><span className='text-[#3498DB]'>➤ </span> Book Videos</li>
              <li><span className='text-[#3498DB]'>➤ </span> Audio Books</li>
              <li><span className='text-[#3498DB]'>➤ </span> Search Engine Optimization</li>
              <li><span className='text-[#3498DB]'>➤ </span> Pitching Manuscripts to Production Houses in Hollywood</li>
              <li><span className='text-[#3498DB]'>➤ </span> Articles/Blogs (Writing & Distribution)</li>
              <li><span className='text-[#3498DB]'>➤ </span> New York Times Featuring & Article</li>
              <li><span className='text-[#3498DB]'>➤ </span> Wall Street Journal Featuring & Article</li>
            </ul>
            <p className="text-gray-700">
              Your ultimate source for all ghostwriting needs under a single roof, with promised excellency and an experience as memorable as the book-writing journey can be.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/aboutus-2.png"
            alt="Our Services"
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>
  </section>
  {/* <section className="relative py-16 bg-gradient-to-b from-[#3c1a68] to-[#52003b] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
  
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Order Custom–written Content</h2>
      <p className="text-lg text-gray-200">
        Copyscape–approved and tested content of the highest quality is included in every delivery.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="javascript:;" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition">
          Get a Quote
        </a>
        <a href="javascript:;" className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
          Live Chat
        </a>
        <a href="tel:6674235532" className="text-white hover:underline font-medium">
          (667) 423-5532
        </a>
      </div>
    </div>

   
    <div className="flex justify-center items-end gap-8">
      <img src="/order-img-1.png" alt="figure" className="w-40 md:w-48" />
      <img src="/order-img-2.png" alt="figure" className="w-40 md:w-48" />
      <img src="/order-img-3.png" alt="figure" className="w-40 md:w-48" />
    </div>
  </div>
  <div className="absolute inset-0 pointer-events-none">
    {[
      { src: "anime-1.png", style: "top-10 left-10 animate-float-slow" },
      { src: "anime-2.png", style: "top-1/4 right-20 animate-float-medium" },
      { src: "anime-3.png", style: "bottom-20 left-32 animate-float-fast" },
      { src: "anime-4.png", style: "bottom-10 right-10 animate-float-medium" },
    ].map((item, i) => (
      <img
        key={i}
        src={`/${item.src}`}
        alt="floating-triangle"
        className={`w-6 h-6 absolute ${item.style} opacity-60`}
      />
    ))}
  </div>
</section> */}

<PartnerSection />
<ServicesSection />
  </>
  );
};

export default HeroSection;
