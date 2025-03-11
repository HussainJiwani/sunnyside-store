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
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Store Hours</h2>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>📅 Mon-Thu: 7:00 AM - 10:00 PM</li>
            <li>📅 Fri-Sat: 7:00 AM - MIDNIGHT</li>
            <li>📅 Sun: 11:00 AM - 9:00 PM</li>
          </ul>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-16 bg-[#FFF3CD] text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Sign Up</h2>
          <p className="text-lg text-gray-600 mb-6">Submit any product requests you have here or contact us directly:</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg bg-gray-100" />
            <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg bg-gray-100" />
            <input type="email" placeholder="E-mail" className="w-full p-3 border rounded-lg bg-gray-100" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded-lg bg-gray-100" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-lg bg-gray-100 md:col-span-2 h-32"></textarea>
            <button type="submit" className="bg-[#8B4513] hover:bg-[#654321] text-white px-6 py-3 rounded-full text-lg md:col-span-2">Send Message</button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#FFEB99] text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6">📍 Contact Us</h2>
          <p className="text-lg">📍 3108 Crest Hwy ste b, Thomaston, GA 30286, United States</p>
          <p className="text-lg">📞 +1-706-938-0334</p>
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