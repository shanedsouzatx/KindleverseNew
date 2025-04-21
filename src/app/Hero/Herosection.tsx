import React from 'react';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#ECF0F1] text-white min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Bring Your Story to Life with Professional Ghostwriting
            </h1>
            <p className="text-lg mb-6 text-gray-800 animate-fadeIn delay-100">
              Have a story to tell but need the right words? Our expert ghostwriters transform your ideas into compelling, well-crafted books that captivate readers. We ensure your vision is brought to life with clarity and creativity. With a seamless writing process, industry expertise, and a commitment to quality, we help you publish with confidence.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#" className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Discuss your project <i className="fa fa-arrow-circle-right ml-2"></i>
              </a>
              <a href="tel:8555877621" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Call Now <i className="fa fa-phone ml-2"></i>
              </a>
            </div>
            <a href="#" className="flex items-center space-x-3 text-blue-600 hover:underline">
              <i className="fa fa-comments-o text-xl"></i>
              <div>
                <span>24/7 Available</span>
                <p className="text-sm">Live Chat</p>
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
                    <stop offset="100%" stopColor="#4D30BE" />
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
            <div className="absolute top-[-80] right-3 bg-white rounded-full border-4 border-blue-700 w-28 h-28 flex flex-col justify-center items-center text-center shadow-xl z-20">
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

                  <div className="relative mb-8">
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
  );
};

export default HeroSection;
