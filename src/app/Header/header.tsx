'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo1.png" alt="Kindleverse Logo" width={200} height={90} />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#2C3E50] lg:bg-transparent p-4 lg:p-0`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 font-medium text-sm lg:text-base">
            <li><Link href="/" className="hover:text-[#E67E22]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#E67E22]">About</Link></li>

            {/* Dropdowns */}
            <Dropdown title="Ghost Writing" links={ghostWritingLinks} />
            <Dropdown title="Book Editing" links={bookEditingLinks} />
            <Dropdown title="Other Services" links={otherServicesLinks} />

            <li><Link href="/contact" className="hover:text-[#E67E22]">Contact</Link></li>
          </ul>

          {/* Action Buttons */}
          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col lg:flex-row gap-2">
            <button className="bg-[#E67E22] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition">
              LIVE CHAT
            </button>
            <a
              href="tel:6674235532"
              className="bg-[#E67E22] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12] transition text-center"
            >
              (667) 423–5532
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Dropdown = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <li className="relative group">
      <button
        className="flex items-center gap-1 hover:text-[#E67E22] transition"
        onClick={() => setShowMobile(!showMobile)}
      >
        {title} <span className="text-sm">▼</span>
      </button>

      {/* Desktop Mega Menu */}
      <ul className="hidden group-hover:grid absolute top-full left-0 bg-white text-black p-5 w-[700px] grid-cols-2 sm:grid-cols-3 gap-4 shadow-lg rounded-md z-50">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="block hover:text-[#3498DB] border-b border-gray-300 hover:border-[#3498DB] transition pb-1">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown */}
      {showMobile && (
        <ul className="lg:hidden mt-2 space-y-1 pl-4 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="block text-white hover:text-[#E67E22]">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Link groups (no change)
const ghostWritingLinks = [
  { href: "/story-writing", label: "Story Writing" },
  { href: "/song-writing", label: "Song Writing" },
  { href: "/memoir-writing", label: "Memoir Writing" },
  { href: "/nonfiction-writing", label: "Non-Fiction Writing" },
  { href: "/rhyme-writing", label: "Rhymes Writing" },
  { href: "/ebook-writing", label: "Ebook Writing" },
  { href: "/biography-writing", label: "Biography Writing" },
  { href: "/autobiography-writing", label: "Autobiography Writing" },
  { href: "/seo-content-writing", label: "SEO Content Writing" },
  { href: "/hiphop-writing", label: "Hip Hop Writing" },
  { href: "/video-script-writing", label: "Video Script Writing" },
  { href: "/novel-writing", label: "Novel Writing" },
  { href: "/wikipedia-writing-services", label: "Wiki Writing" },
  { href: "/speech-writing-services", label: "Speech Writing" },
  { href: "/movie-writing", label: "Movie Writing" },
  { href: "/screen-writing", label: "Screen Writing" },
  { href: "/military-fiction-writing", label: "Military Fiction" },
  { href: "/comic-book-writing", label: "Comic Book Writing" },
  { href: "/children-book-writing", label: "Children’s Books" },
  { href: "/comedy-writing", label: "Comedy Writing" },
  { href: "/business-writing-service", label: "Business Writing" },
  { href: "/fiction-book-writing-services", label: "Fiction Book Writing" },
  { href: "/horror-book-writing-service", label: "Horror Book Writing" },
];

const bookEditingLinks = [
  { href: "/children-book-editing", label: "Children's Book Editors" },
  { href: "/book-proofreaders", label: "Book Proofreading" },
  { href: "/christian-book-editing-service", label: "Christian Book Editing" },
  { href: "/poetry-editing-services", label: "Poetry Editing" },
  { href: "/novel-editing-services", label: "Novel Editing" },
];

const otherServicesLinks = [
  { href: "/book-cover-designer", label: "Book Cover Design" },
  { href: "/audiobook-narrators", label: "Book Audio" },
  { href: "/book-publication-company", label: "Book Publishing" },
  { href: "/book-marketing-company", label: "Book Marketing" },
  { href: "/book-formatting-services", label: "Book Formatting" },
];

export default Header;
