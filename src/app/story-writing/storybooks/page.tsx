'use client';
import { useState } from 'react';

const books = [
  { title: 'GhostWriting', category: 'GhostWriting', image: '/work-13.png' },
  { title: 'GhostWriting 3', category: 'GhostWriting', image: '/work-14.png' },
  { title: 'GhostWriting 4', category: 'GhostWriting', image: '/work-15.png' },
  { title: 'GhostWriting 5', category: 'GhostWriting', image: '/work-16.png' },
  { title: 'GhostWriting 6', category: 'GhostWriting', image: '/work-17.png' },
  { title: 'GhostWriting 7', category: 'GhostWriting', image: '/work-18.png' },
  { title: 'GhostWriting 8', category: 'GhostWriting', image: '/8.jpg' },
  { title: 'GhostWriting 9', category: 'GhostWriting', image: '/9.jpg' },
  { title: 'GhostWriting 10', category: 'GhostWriting', image: '/10.jpg' },
  { title: 'GhostWriting 11', category: 'GhostWriting', image: '/11.jpg' },

  { title: 'Book Editing 1', category: 'Book Editing', image: '/book1.png' },
  { title: 'Book Editing 2', category: 'Book Editing', image: '/book2.png' },
  { title: 'Book Editing 3', category: 'Book Editing', image: '/book3.png' },
  { title: 'Book Editing 4', category: 'Book Editing', image: '/book1.png' },
  { title: 'Book Editing 5', category: 'Book Editing', image: '/book2.png' },
  { title: 'Book Editing 6', category: 'Book Editing', image: '/book3.png' },
  { title: 'Book Editing 7', category: 'Book Editing', image: '/book1.png' },
  { title: 'Book Editing 8', category: 'Book Editing', image: '/book2.png' },
  { title: 'Book Editing 9', category: 'Book Editing', image: '/book3.png' },
  { title: 'Book Editing 10', category: 'Book Editing', image: 'book1.png' }, 
];

const categories = ['GhostWriting', 'Book Editing'];

export default function BookFilter() {
  const [selectedCategory, setSelectedCategory] = useState('GhostWriting');
  const filteredBooks = books.filter(book => book.category === selectedCategory);

  return (
    <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        Explore the Artistry We Bring to Life
        </h1>
        <p className="text-center mb-8 max-w-3xl mx-auto text-sm sm:text-base">
        Step into a world where creativity meets craftsmanship. What we build leaves a lasting impact.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-[#E67E22] to-[#F39C12] text-white'
                  : 'bg-black text-white hover:bg-gradient-to-r hover:from-[#E67E22] hover:to-[#F39C12]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid (5 per row, wrap to new rows if more) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map(book => (
            <div
              key={book.title}
              className="rounded-lg overflow-hidden shadow-lg h-80 w-full"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
