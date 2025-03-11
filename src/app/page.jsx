"use client";

import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Sunnyside Country Store</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-300">About</a></li>
              <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-80 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/gasstation.png')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-4xl font-bold">Welcome to Sunnyside Country Store</h2>
          <p className="text-xl">Your local convenience store with fresh products and great service.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>Located in Thomaston, GA, we provide top-quality groceries, fuel, and essentials.</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">Fresh Groceries</div>
            <div className="bg-white p-6 rounded-lg shadow-md">Snacks & Beverages</div>
            <div className="bg-white p-6 rounded-lg shadow-md">Fuel Station</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-yellow-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">📍 3108 Crest Hwy ste b, Thomaston, GA 30286, United States</p>
          <p className="text-lg">📞 +1-706-938-0334</p>
          <div className="mb-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.472525494577!2d-84.3471344!3d32.8909376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45f13cb5d09f7%3A0x4bfcf95c7a3fbc8b!2s3108%20Crest%20Hwy%20ste%20b%2C%20Thomaston%2C%20GA%2030286%2C%20USA!5e0!3m2!1sen!2sus!4v1715634790000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61572997659114" target="_blank" className="text-blue-700 text-lg font-semibold hover:underline">Facebook</a>
            <a href="https://www.instagram.com/sunnysidecountrystore/" target="_blank" className="text-pink-600 text-lg font-semibold hover:underline">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>© 2025 Sunnyside Country Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;
