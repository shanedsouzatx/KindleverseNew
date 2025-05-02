'use client'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Joseph Boucher",
      image: "/tes1.jpg",
      rating: 5,
      text: "I've been working with Kindle Verse for a while now, and let me tell you, it's really easy to work with this KindleVerse company, as they offer the best and affordable ghostwriting services. Their professional ghost book writers are an expert in their field and make the process very simple for everyone. They always deliver the content on time and exceed the expectations, answer all your questions promptly, and do work of exceptional quality.",
    },
    {
      name: "Annabell Ison",
      image: "/tes41.jpg",
      rating: 5,
      text: "I want to thank Kindle Verse for making my dream of becoming a published author come true. I was struggling to write my book, but then I found this amazing ghostwriting company, their ghost book writers picked up the slack and wrote the entire thing for me in no time. Their writers understood my vision and were able to turn it into an incredible masterpiece. I would highly recommend Kindle Verse to anyone who wants a guide through their writing journey, and make their book a bestseller.",
    },
    {
      name: "Moore W.",
      image: "/tes42.jpg",
      rating: 5,
      text: "I have been in the ghostwriting business for over a decade and have worked with some best ghostwriting companies in the market. The thing I love most about Kindle Verse is their dedication to their clients and commitment to quality. They are really great at communication and follow-up, which is rare in this industry. They were professional, easy to work with, and gave me the best experience you could ask for. I would highly recommend them to anyone who wants a quality product without any hiccups.",
    },
  ];

  return (
    <div className=" bg-[#ECF0F1] text-white pb-10 lg:py-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 sm:mb-28 text-[#10212d]">Our Testimonials</h2>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
            key={index}
            className="bg-[#ECF0F1] text-gray-800 rounded-2xl p-6 pt-20 relative shadow-md transition-transform duration-300 hover:shadow-2xl hover:scale-105 mb-20 sm:mb-24"
          >
            <div className="absolute -top-14 left-1/4 transform -translate-x-1/2 z-10">
              <img
                src={t.image}
                alt={t.name}
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <p className="text-sm sm:text-base text-center italic mb-6 mt-4 leading-relaxed px-2">
              &quot;{t.text}&quot;
            </p>
            <div className="mt-auto text-center sm:text-left">
              <div className="font-bold text-base">{t.name}</div>
              <div className="flex justify-center sm:justify-start gap-1 text-yellow-400 text-base mt-1">
                {"★".repeat(t.rating)}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
