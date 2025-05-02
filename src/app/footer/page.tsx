// import { px } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaPinterestP,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaFacebook
// } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-gray-800 pt-10 pb-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center mb-8">
//           <Link href="https://www.trustpilot.com/review/kindleverse.com" title="Trustpilot">
//             <img
//               src="/trustpilot.png"
//               alt="Trustpilot"
//               className="w-auto h-auto object-contain"
//             />
//           </Link>
//         </div>

//         <Link href="/" className="flex items-center cursor-pointer">
//           <Image src="/logo1.png" alt="TechCraftLogo" width={220} height={220} />
//         </Link>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
//           {/* Ghostwriting Column */}
//           <div>
//             <h3 className="text-[30px] font-bold text-white mb-2">Ghostwriting</h3>
//             <ul className="space-y-1">
//               {[
//                 "Story Writing", "Song Writing", "Memoir Writing", "Non-Fiction Writing",
//                 "Rhymes Writing", "Ebook Writing", "Biography Writing", "Autobiography Writing",
//                 "SEO Content Writing", "Hip Hop Writing"
//               ].map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={`/${item.toLowerCase().replace(/\s+/g, '-')}.php`}
//                     className="hover:underline text-white text-[16px]"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Script Writing Column */}
//           <div>
//             <ul className="space-y-1 pt-14" >
//               {[
//                 "Script Writing", "Novel Writing", "Wiki Writing", "Speech Writing", "Comedy Writing",
//                 "Movie Writing", "Screen Writing", "Military Fiction writing", "Comic Book writing",
//                 "Children’s Books"
//               ].map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={`/${item
//                       .toLowerCase()
//                       .replace(/\s+/g, '-')
//                       .replace(/[’']/g, '')}.php`}
//                     className="hover:underline text-white text-[16px]"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Other Services Column */}
//           <div>
//             <h3 className="text-[30px] font-bold text-white mb-2">Other Services</h3>
//             <ul className="space-y-1">
//               {[
//                 "Book Cover Design", "Book Audio", "Book Publishing", "Book Marketing", "Poetry Editing"
//               ].map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={`/${item
//                       .toLowerCase()
//                       .replace(/\s+/g, '-')
//                       .replace(/book-audio/, 'audiobook-narrators')
//                       .replace(/poetry-editing/, 'book-editing/poetry-editing-services')}.php`}
//                     className="hover:underline text-white text-[16px]"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Follow Us and Contact Column */}
//           <div>
//             <h3 className="text-[30px] font-bold text-white mb-2">Follow Us</h3>
//             <div className="flex items-center gap-3 mt-4">
//             <Link
//     href="https://www.facebook.com/techcraft.inc/"
//     target="_blank"
//     className="group border-2  border-blue-600 bg-[#F39C12] rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 hover:bg-blue-600"
//   >
//     <FaFacebookF className="text-white group-hover:text-white transition-colors duration-300" />
//   </Link>

//   {/* LinkedIn */}
//   <Link
//     href="https://www.linkedin.com/company/tech-craft-inc/"
//     target="_blank"
//     className="group border-2 border-cyan-500 bg-[#F39C12] rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500"
//   >
//     <FaLinkedinIn className="text-white group-hover:text-white transition-colors duration-300" />
//   </Link>

//   {/* Instagram */}
//   <Link
//     href="https://www.instagram.com/techcraftinc/"
//     target="_blank"
//     className="group border-2 border-pink-500 bg-[#F39C12] rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 hover:bg-pink-500"
//   >
//     <FaInstagram className="text-pink-500 group-hover:text-white transition-colors duration-300" />
//   </Link>

//   {/* Pinterest */}
//   <Link
//     href="https://www.pinterest.com/techcraftinc/"
//     target="_blank"
//     className="group border-2 border-red-500 bg-[#F39C12] rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 hover:bg-red-500"
//   >
//     <FaPinterestP className="text-red-500 group-hover:text-white transition-colors duration-300" />
//   </Link>
//             </div>

//             <ul className="font-semibold space-y-1 text-white text-[18px] mt-4">
//               <li>
//                 <a href="tel:6674235532" className="flex items-center space-x-2 pt-4">
//                   <FaPhoneAlt size={30}  className='text-blue-800'/>
//                   <span>(667) 423-5532</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:info@kindleverse.com" className="flex items-center space-x-2 pt-4">
//                   <HiOutlineMail size={30}  className='text-yellow-600'/>
//                   <span>info@kindleverse.com</span>
//                 </a>
//               </li>
//               <li className="flex items-start space-x-2 pt-4">
//                 <FaMapMarkerAlt size={30}  className='text-red-600 mt-4'/>
//                 <span>17330 Preston Road Suite 200D Dallas, TX 75252</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t mt-10 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white text-[16px]">
//             <ul className="flex space-x-4 mb-2 md:mb-0">
//               <li><a href="/terms.php" className="hover:underline">Terms & Conditions</a></li>
//               <li><a href="/privacy.php" className="hover:underline">Privacy Policy</a></li>
//             </ul>
//             <div>
//               <img src="/paymentcard.png" alt="Payment Card Acceptable" className="w-auto h-auto" />
//             </div>
//             <p className="mt-2 md:mt-0">© 2025 KindleVerse</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-12 text-lg">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-5 mb-2">
          <Image
            src="/logo1.png"
            alt="KindleVerse Logo"
            width={220}
            height={60}
            className="object-contain -mt-4"
          />
          <ul className="space-y-4 text-lg font-semibold">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-300 text-base" />
              <a href="tel:6674235532">(667) 423-5532</a>
            </li>
            <li className="flex items-center space-x-3">
              <HiOutlineMail className="text-yellow-400 text-base" />
              <a href="mailto:info@kindleverse.com">info@kindleverse.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-red-400 mt-1 text-base" />
              <span>17330 Preston Road Suite 200D Dallas, TX 75252</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-orange-400 font-semibold text-xl mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:underline text-lg font-semibold">Home</Link></li>
            <li><Link href="/about-us" className="hover:underline text-lg font-semibold">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:underline text-lg font-semibold">Portfolio</Link></li>
            <li><Link href="/reviews" className="hover:underline text-lg font-semibold">Reviews</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-orange-400 font-semibold text-xl mb-4">Services</h4>
          <ul className="space-y-3">
            <li><Link href="/ghostwriting" className="hover:underline text-lg font-semibold">Ghostwriting</Link></li>
            <li><Link href="/book-editing" className="hover:underline text-lg font-semibold">Book Editing</Link></li>
            <li><Link href="/cover-designing" className="hover:underline text-lg font-semibold">Cover Designing</Link></li>
            <li><Link href="/publishing" className="hover:underline text-lg font-semibold">Publishing</Link></li>
          </ul>
        </div>

        {/* Books */}
        <div>
          <h4 className="text-orange-400 font-semibold text-xl mb-4">Books</h4>
          <ul className="space-y-3">
            <li><Link href="/book-marketing" className="hover:underline text-lg font-semibold">Book Marketing</Link></li>
            <li><Link href="/illustration-design" className="hover:underline text-lg font-semibold">Illustration Design</Link></li>
            <li><Link href="/beta-reader-testing" className="hover:underline text-lg font-semibold">Beta Reader Testing</Link></li>
            <li><Link href="/book-coaching" className="hover:underline text-lg font-semibold">Book Coaching</Link></li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://www.facebook.com/techcraft.inc/"
              target="_blank"
              className="group border-2 border-blue-600 bg-[#F39C12] rounded-full h-9 w-9 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-sm text-white group-hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/tech-craft-inc/"
              target="_blank"
              className="group border-2 border-cyan-500 bg-[#F39C12] rounded-full h-9 w-9 flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <FaLinkedinIn className="text-sm text-white group-hover:text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/techcraftinc/"
              target="_blank"
              className="group border-2 border-pink-500 bg-[#F39C12] rounded-full h-9 w-9 flex items-center justify-center hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-sm text-white group-hover:text-white" />
            </Link>
            <Link
              href="https://www.pinterest.com/techcraftinc/"
              target="_blank"
              className="group border-2 border-red-500 bg-[#F39C12] rounded-full h-9 w-9 flex items-center justify-center hover:bg-red-500 transition"
            >
              <FaPinterestP className="text-sm text-white group-hover:text-white" />
            </Link>
          </div>

          <div className="mt-6">
            <Image
              src="/trustpilot.png"
              alt="Trustpilot"
              width={180}
              height={60}
              className="object-contain text-white"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-base">
          <ul className="flex space-x-6">
            <li><Link href="/terms.php" className="hover:underline text-lg font-semibold">Terms & Conditions</Link></li>
            <li><Link href="/privacy.php" className="hover:underline text-lg font-semibold">Privacy Policy</Link></li>
          </ul>
          <Image src="/paymentcard.png" alt="Payment Cards" width={300} height={40} />
          <p className="text-lg font-semibold">© 2025 KindleVerse</p>
        </div>
      </div>
    </footer>
  );
}
