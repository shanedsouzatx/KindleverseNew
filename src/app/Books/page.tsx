'use client';
import { useState } from 'react';

const books = [
  { title: 'A Sweet Possibility', category: 'Fiction', image: '/rhobes.jpg' },
  { title: 'Feast of Chaos', category: 'Fiction', image: '/1.jpg' },
  { title: 'Fiction Book 3', category: 'Fiction', image: '/2.jpg' },
  { title: 'Fiction Book 4', category: 'Fiction', image: '/3.jpg' },
  { title: 'Fiction Book 5', category: 'Fiction', image: '/4.jpg' },
  { title: 'Fiction Book 6', category: 'Fiction', image: '/5.jpg' },
  { title: 'Fiction Book 7', category: 'Fiction', image: '/6.jpg' },
  { title: 'Fiction Book 8', category: 'Fiction', image: '/8.jpg' },
  { title: 'Fiction Book 9', category: 'Fiction', image: '/9.jpg' },
  { title: 'Fiction Book 10', category: 'Fiction', image: '/10.jpg' },

  { title: 'Non Fiction 1', category: 'Non Fiction', image: '/11.jpg' },
  { title: 'Non Fiction 2', category: 'Non Fiction', image: '/12.jpg' },
  { title: 'Non Fiction 3', category: 'Non Fiction', image: '/13.jpg' },
  { title: 'Non Fiction 4', category: 'Non Fiction', image: '/14.jpg' },
  { title: 'Non Fiction 5', category: 'Non Fiction', image: '/15.jpg' },
  { title: 'Non Fiction 6', category: 'Non Fiction', image: '/16.jpg' },
  { title: 'Non Fiction 7', category: 'Non Fiction', image: '/17.jpg' },
  { title: 'Non Fiction 8', category: 'Non Fiction', image: '/18.jpg' },
  { title: 'Non Fiction 9', category: 'Non Fiction', image: '/19.jpg' },
  { title: 'Non Fiction 10', category: 'Non Fiction', image: '/20.jpg' },

  { title: 'Deep Night 1', category: 'Biography', image: '/21.jpg' },
  { title: 'Biography Book 2', category: 'Biography', image: '/22.jpg' },
  { title: 'Biography Book 3', category: 'Biography', image: '/23.jpg' },
  { title: 'Biography Book 4', category: 'Biography', image: '/24.jpg' },
  { title: 'Biography Book 5', category: 'Biography', image: '/25.jpg' },
  { title: 'Deep Night 2', category: 'Biography', image: '/26.jpg' },
  { title: 'Biography Book 7', category: 'Biography', image: '/27.jpg' },
  { title: 'Biography Book 8', category: 'Biography', image: '/28.jpg' },
  { title: 'Biography Book 9', category: 'Biography', image: '/29.jpg' },
  { title: 'Biography Book 10', category: 'Biography', image: '/30.jpg' },

  { title: 'Pursued by a Dragon 1', category: 'Children', image: '/31.jpg' },
  { title: 'Children Book 2', category: 'Children', image: '/32.jpg' },
  { title: 'Children Book 3', category: 'Children', image: '/33.jpg' },
  { title: 'Children Book 4', category: 'Children', image: '/34.jpg' },
  { title: 'Children Book 5', category: 'Children', image: '/35.jpg' },
  { title: 'Children Book 6', category: 'Children', image: '/36.jpg' },
  { title: 'Children Book 7', category: 'Children', image: '/37.jpg' },
  { title: 'Children Book 8', category: 'Children', image: '/38.jpg' },
  { title: 'Children Book 9', category: 'Children', image: '/39.jpg' },
  { title: 'Children Book 10', category: 'Children', image: '/40.jpg' },

  { title: 'Dressed in Smoke', category: 'Informative', image: '/41.jpg' },
  { title: 'Informative Book 2', category: 'Informative', image: '/42.jpg' },
  { title: 'Informative Book 3', category: 'Informative', image: '/43.jpg' },
  { title: 'Informative Book 4', category: 'Informative', image: '/44.jpg' },
  { title: 'Informative Book 5', category: 'Informative', image: '/45.jpg' },
  { title: 'Informative Book 6', category: 'Informative', image: '/46.jpg' },
  { title: 'Informative Book 7', category: 'Informative', image: '/47.jpg' },
  { title: 'Informative Book 8', category: 'Informative', image: '/48.jpg' },
  { title: 'Informative Book 9', category: 'Informative', image: '/49.jpg' },
  { title: 'Informative Book 10', category: 'Informative', image: '/50.jpg' },
  

];

const categories = ['Fiction', 'Non Fiction', 'Biography', 'Children', 'Informative'];

export default function BookFilter() {
  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  const filteredBooks = books.filter(book => book.category === selectedCategory);

  return (
    <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          YOUR UTMOST CHANCE OF BECOMING A PUBLISHED BESTSELLER WRITER
        </h1>
        <p className="text-center mb-8 max-w-3xl mx-auto text-sm sm:text-base">
          Our team of extremely talented ghost book writers and editors ensures that they don’t waste a single drop of sweat,
          making you one of the most sought-after writers of the century!
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
