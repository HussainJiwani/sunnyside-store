"use client";  // This must be the first line

import { useState } from 'react';

function MainComponent() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f1e3] font-serif">
      <nav className="bg-[#8B4513] p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            🏡 Sunnyside Country Store
          </div>
          <div className="hidden md:flex space-x-6 text-white text-lg">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#fuel" className="hover:text-yellow-300">Fuel Prices</a>
            <a href="#store" className="hover:text-yellow-300">Store</a>
            <a href="#order" className="hover:text-yellow-300">Order Online</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setShowMenu(!showMenu)}>
            ☰
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden mt-4 space-y-2 text-white text-lg">
            <a href="#home" className="block">Home</a>
            <a href="#fuel" className="block">Fuel Prices</a>
            <a href="#store" className="block">Store</a>
            <a href="#order" className="block">Order Online</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="relative h-[500px]">
          <img src="/country-store.jpg" alt="Country Store" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold">Welcome to Sunnyside Country Store</h1>
              <p className="text-2xl mt-2">Your local stop for fresh goods & fuel</p>
            </div>
          </div>
        </section>

        <section id="fuel" className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Today's Fuel Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl">Regular</h3>
                <p className="text-3xl text-[#8B4513]">$3.29</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl">Plus</h3>
                <p className="text-3xl text-[#8B4513]">$3.49</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl">Premium</h3>
                <p className="text-3xl text-[#8B4513]">$3.69</p>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Order Online</h2>
            <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
              <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
              <input type="text" placeholder="Your Contact" className="w-full p-2 mb-4 border rounded" />
              <textarea placeholder="Your Order Details" className="w-full p-2 mb-4 border rounded"></textarea>
              <button type="submit" className="bg-[#8B4513] text-white px-6 py-2 rounded">Submit Order</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#8B4513] text-white py-6 text-center">
        <p>© 2025 Sunnyside Country Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;
