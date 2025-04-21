import Image from "next/image";

export default function Banner5() {
  return (
    <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeIn">
              Bring Your Story to Life With a Book Writer by Your Side!
            </h1>
            <p className="text-lg mb-6 text-white animate-fadeIn delay-100">
              Hire a book writer now, and start working on your first book. Allow us to make you realize your full literary potential and make you stand out in the crowd of millions with your bestseller book!
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Get Consultation
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/Assets-11.png"
              alt="Writer Illustration"
              height={500}
              width={500}
              className="animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
