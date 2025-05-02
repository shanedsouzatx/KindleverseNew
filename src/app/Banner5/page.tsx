'use client';
import Image from "next/image";
// bg-gradient-to-r from-[#2C3E50] to-[#3498DB]
export default function Banner5() {
  return (
    <section className="bg-white text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-black mb-6 animate-fadeIn">
              Bring Your Story to Life With a Book Writer by Your Side!
            </h1>
            <p className="text-lg mb-6 text-black animate-fadeIn delay-100">
              Hire a book writer now, and start working on your first book. Allow us to make you realize your full literary potential and make you stand out in the crowd of millions with your bestseller book!
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Get Consultation
              </button>
              <button className="bg-[#10212D] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Image with 3D Floating Animation */}
          <div className="flex justify-center">
            <div className="relative perspective-1000 animate-floating">
              <div className="transform rotate-z-[-10deg] scale-[1.2]">
                <Image
                  src="/Assets-11.png" // yahan apna correct image path lagana
                  alt="Writer Illustration"
                  height={1000}
                  width={800}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
