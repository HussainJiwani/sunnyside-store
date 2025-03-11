"use client";

import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-200 font-serif">
      {/* Header */}
      <header className="bg-[#8B4513] text-white py-5 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold tracking-wide">🌅 Sunnyside Country Store</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center">
        <img src="/countryside-store.jpg" alt="Sunnyside Country Store" className="absolute inset-0 w-full h-full object-cover brightness-75" />
        <div className="text-center text-white z-10 bg-black bg-opacity-50 px-8 py-6 rounded-lg shadow-lg">
          <h2 className="text-6xl font-bold mb-4">🌻 Opening Soon! 🌾</h2>
          <p className="text-2xl">Your Neighborhood Stop for Essentials & More</p>
        </div>
      </section>

      {/* Store Hours Section */}
      <section id="hours" className="py-16 bg-white text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6">🕒 Store Hours</h2>
          <p className="text-2xl text-gray-700">Monday - Sunday: <span className="font-semibold">6:00 AM - 10:00 PM</span></p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#FFF3CD] text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6">🚜 Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-lg">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl">☕</span>
              <p className="mt-3">Fresh Coffee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl">🥪</span>
              <p className="mt-3">Snacks & Deli</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl">⛽</span>
              <p className="mt-3">Fuel Station</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl">🥤</span>
              <p className="mt-3">Cold Drinks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#FFEB99] text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6">📍 Contact Us</h2>
          <p className="text-2xl">📍 3108 Crest Hwy ste b, Thomaston, GA 30286, United States</p>
          <p className="text-2xl">📞 +1-706-938-0334</p>
          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.472525494577!2d-84.3471344!3d32.8909376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45f13cb5d09f7%3A0x4bfcf95c7a3fbc8b!2s3108%20Crest%20Hwy%20ste%20b%2C%20Thomaston%2C%20GA%2030286%2C%20USA!5e0!3m2!1sen!2sus!4v1715634790000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.facebook.com/profile.php?id=61572997659114" target="_blank" className="text-blue-700 text-lg font-semibold hover:underline">Facebook</a>
            <a href="https://www.instagram.com/sunnysidecountrystore/" target="_blank" className="text-pink-600 text-lg font-semibold hover:underline">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-6 text-center mt-8">
        <p className="text-lg">© 2025 Sunnyside Country Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;
