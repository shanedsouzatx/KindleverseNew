
import Image from "next/image";

export default function Banner3() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
              <span className="text-black">Kindleverse,</span> where your story<br />
              <span className="text-[#E67E22]">comes to life.</span>
            </h1>
            <p className="text-base text-black font-semibold mb-4">
              As a premier book writing, marketing and a legacy books publisher company, 
              we pride ourselves on our unmatched proficiency in turning your manuscript into a bestseller.
            </p>
            <p className="text-base text-black font-semibold mb-6">
              Find book publisher in the USA that is affordable and provides top-rated quality work 
              without any compromise and delays in submissions.
            </p>
            <ul className="list-disc list-inside text-[#6c757d] space-y-2 text-base mb-8">
              <li>Ghostwriting</li>
              <li>Professional editing and proofreading</li>
              <li>Cover designing and Illustrations</li>
              <li>Book Promotions and Marketing</li>
              <li>Amazon Publishing and Printing</li>
              <li>Children Book illustration and publishing</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#E67E22] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Get A Quote
              </button>
              <button className="bg-[#10212D] text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-stretch justify-center">
            <Image
              src="/Book-Mockup.png"
              alt="Book Mockup"
              layout="intrinsic"
              height={900}
              width={500}
              className="object-contain self-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
