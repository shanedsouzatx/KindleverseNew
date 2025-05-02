// 'use client';
// import Image from 'next/image';

// const DiscountSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center py-12"
//       style={{ backgroundImage: "url('/discount-bg.png')" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Column */}
//           <div className="text-white space-y-6 text-left">
//             <h2 className="text-3xl font-bold">Services That We Excel In</h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   title: 'Quality Customer Services',
//                   text: 'Our ghost book writers work round the clock to give satisfactory and the finest quality content to our customers.',
//                   icon: 'discount-icon-0.png',
//                 },
//                 {
//                   title: '100% Ownership',
//                   text: 'Our clients are granted full ownership of the written content of the book.',
//                   icon: 'discount-icon-1.png',
//                 },
//                 {
//                   title: '24/7 Customer Support',
//                   text: '24/7 expert support for all your ghost book writing needs. Contact us anytime, any day.',
//                   icon: 'discount-icon-2.png',
//                 },
//                 {
//                   title: '100% Quality Assurance',
//                   text: 'All the work is checked and verified by the quality assurance manager before being delivered to you. We never compromise on quality.',
//                   icon: 'discount-icon-3.png',
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="flex gap-4 items-start">
//                   <Image
//                     src={`/${item.icon}`}
//                     alt={item.title}
//                     width={40}
//                     height={40}
//                   />
//                   <div>
//                     <h4 className="font-semibold text-lg">{item.title}</h4>
//                     <p className="text-sm">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 mt-6">
//               <button className="bg-primary text-white px-6 py-3 rounded-md">Get a Quote</button>
//               <button className="bg-secondary text-white px-6 py-3 rounded-md">Live Chat</button>
//             </div>
//           </div>

//           {/* Right Column - Form */}
//           <div className="bg-white rounded-lg p-6 shadow-lg text-left relative">
//             <Image
//               src="/top-agency-icon.png"
//               alt="Top Agency Icon"
//               width={64}
//               height={64}
//               className="absolute top-[-32px] left-1/2 transform -translate-x-1/2"
//             />
//             <h3 className="text-xl font-bold mb-4 text-center">
//               Sign Up With Kindle Verse Now To Avail Of Our Exclusive Discounts
//             </h3>
//             <form method="POST" action="/api/submit-form">
//               <input type="hidden" name="url" value="index.html" />
//               <input type="hidden" name="domain" value="www.timesghostwriters.com" />
//               <input type="hidden" name="subject" value="Footer Form (www.timesghostwriters.com)" />
//               <input type="hidden" name="keyword" value="---" />
//               <input type="hidden" name="matchtype" value="---" />
//               <input type="hidden" name="msclkid" value="---" />
//               <input type="hidden" name="gclid" value="---" />

//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                   className="w-full px-4 py-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="number"
//                   name="phone"
//                   placeholder="Phone"
//                   minLength={10}
//                   maxLength={12}
//                   required
//                   className="w-full px-4 py-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   className="w-full px-4 py-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   name="fmessage"
//                   rows={5}
//                   placeholder="About Your Project"
//                   required
//                   className="w-full px-4 py-2 border rounded"
//                 />
//               </div>

//               <button type="submit" className="bg-primary text-white px-6 py-3 rounded w-full">
//                 Submit
//               </button>
//             </form>

//             <div className="mt-6">
//               <Image src="/discount-img.png" alt="Discount" width={500} height={300} className="w-full h-auto" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background Animation Image */}
//       <div className="absolute right-0 bottom-0 z-0">
//         <Image src="/bg-anime-1.png" alt="Animation" width={300} height={300} />
//       </div>
//     </section>
//   );
// };

// export default DiscountSection;
'use client';
import Image from 'next/image';
import { FaUser, FaPhone, FaEnvelope, FaPenAlt } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <div className="bg-white">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Services That We Excel In
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {/* Repeatable Card */}
  {[
    {
      icon: '/discount-icon-0.png',
      title: 'Quality Customer Services',
      desc: 'Our Ghost Book Writers Work Round The Clock To Give Satisfactory And The Finest Quality Content To Our Customers.',
    },
    {
      icon: '/discount-icon-1.png',
      title: '100% Ownership',
      desc: 'Our Clients Are Granted Full Ownership Of The Written Content Of The Book.',
    },
    {
      icon: '/discount-icon-2.png',
      title: '24/7 Customer Support',
      desc: '24/7 Expert Support For All Your Ghost Book Writing Needs, Contact Us Anytime, Any Day.',
    },
    {
      icon: '/discount-icon-3.png',
      title: '100% Quality Assurance',
      desc: 'All work is verified by our Quality Assurance Manager to ensure top-notch quality—no compromises.',
    },
  ].map((service, i) => (
    <div
      key={i}
      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <Image
        src={service.icon}
        alt={service.title}
        width={60}
        height={60}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.desc}</p>
    </div>
  ))}
</div>


          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-[#2C3E50] hover:bg-[#3498DB] text-white px-8 py-3 rounded-full font-semibold transition">
              Get A Quote
            </button>
            <button className="bg-white border border-[#2C3E50] hover:bg-gray-50 text-[#2C3E50] px-8 py-3 rounded-full font-semibold transition">
              Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] rounded-xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Sign Up With Kindle Verse Now To Avail Of Our Exclusive Discounts
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* About Project */}
              <div className="relative">
                <FaPenAlt className="absolute top-4 left-3 text-gray-300" />
                <textarea
                  placeholder="About Your Project"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#2C3E50] py-3 rounded-lg font-semibold hover:bg-gray-100 transition mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}