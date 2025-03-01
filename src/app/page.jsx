"use client";
import { useState } from 'react';

function MainComponent() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#1a237e] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-roboto text-2xl">
            🌅 Sunnyside Grocery
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-yellow-300">
              Home
            </a>
            <a href="#fuel" className="text-white hover:text-yellow-300">
              Fuel Prices
            </a>
            <a href="#store" className="text-white hover:text-yellow-300">
              Store
            </a>
            <a href="#contact" className="text-white hover:text-yellow-300">
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-white hover:text-yellow-300">
              Home
            </a>
            <a href="#fuel" className="block text-white hover:text-yellow-300">
              Fuel Prices
            </a>
            <a href="#store" className="block text-white hover:text-yellow-300">
              Store
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-yellow-300"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="relative h-[500px]">
          <img
            src="/gasstation.png"
            alt="Sunnyside Grocery gas station with pumps and store front"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-roboto text-4xl md:text-6xl mb-4">
                Welcome to Sunnyside Grocery
              </h1>
              <p className="text-xl md:text-2xl">
                Your neighborhood gas station & convenience store
              </p>
            </div>
          </div>
        </section>

        <section id="fuel" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="font-roboto text-3xl mb-8 text-center">
              Today's Fuel Prices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl mb-2">Regular</h3>
                <p className="text-3xl text-[#1a237e]">$3.29</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl mb-2">Plus</h3>
                <p className="text-3xl text-[#1a237e]">$3.49</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl mb-2">Premium</h3>
                <p className="text-3xl text-[#1a237e]">$3.69</p>
              </div>
            </div>
          </div>
        </section>

        <section id="store" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="font-roboto text-3xl mb-8 text-center">
              Store Offerings
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <i className="fas fa-coffee text-4xl text-[#1a237e] mb-2"></i>
                <p>Fresh Coffee</p>
              </div>
              <div className="text-center">
                <i className="fas fa-hotdog text-4xl text-[#1a237e] mb-2"></i>
                <p>Hot Foods</p>
              </div>
              <div className="text-center">
                <i className="fas fa-ice-cream text-4xl text-[#1a237e] mb-2"></i>
                <p>Snacks</p>
              </div>
              <div className="text-center">
                <i className="fas fa-beer text-4xl text-[#1a237e] mb-2"></i>
                <p>Cold Beverages</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="font-roboto text-3xl mb-8 text-center">Visit Us</h2>
            <div className="flex flex-col md:flex-row justify-around items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl mb-2">Hours</h3>
                <p>Open 24/7</p>
                <p>365 days a year</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Location</h3>
                <p>123 Sunshine Boulevard</p>
                <p>Anytown, ST 12345</p>
                <p className="mt-2">📞 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a237e] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Sunnyside Grocery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;