"use client";

import React, { useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function MainComponent() {
  // State for Sign-Up Form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Form Submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "signups"), {
        firstName,
        lastName,
        email,
        phone,
        message,
        timestamp: serverTimestamp(),
      });

      setSuccessMessage("Sign-up successful!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-200 font-['Josefin Sans']">
      {/* Header */}
      <header className="bg-[#8B4513] text-white py-5 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold tracking-wide">🌅 Sunnyside Country Store</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center bg-[url('/wooden-texture.jpg')] bg-cover bg-center">
        <div className="text-center text-white z-10 bg-black bg-opacity-50 px-8 py-6 rounded-lg shadow-lg">
          <h2 className="text-6xl font-bold mb-4">🌻 Opening Soon! 🌾</h2>
          <p className="text-2xl">Your Neighborhood Stop for Essentials & More</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#FFF3CD] text-center shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/pizza.jpg" alt="Pizza" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Pizza</h3>
              <p className="text-lg text-gray-600">Delicious, fresh, and made to order.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/food.jpg" alt="Food" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Food</h3>
              <p className="text-lg text-gray-600">Hot meals, fresh ingredients, great taste.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/deli.jpg" alt="Deli" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Deli</h3>
              <p className="text-lg text-gray-600">Premium meats and cheeses sliced fresh.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/fuel.jpg" alt="Fuel" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Fuel</h3>
              <p className="text-lg text-gray-600">Quality fuel at great prices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/drinks.jpg" alt="Drinks" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Drinks</h3>
              <p className="text-lg text-gray-600">Refreshing beverages for all tastes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/doordash.jpg" alt="Doordash" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">Doordash</h3>
              <p className="text-lg text-gray-600">Order online and get it delivered fast.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Store Hours & Contact */}
      <section id="contact" className="py-16 bg-[#FFEB99] shadow-md rounded-lg mx-4 my-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 text-left px-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#8B4513]">ADDRESS</h2>
            <p className="text-lg">📍 3108 Crest Hwy ste b, Thomaston, GA 30286, United States</p>

            <h2 className="text-2xl font-bold text-[#8B4513]">PHONE</h2>
            <p className="text-lg">📞 +1-706-938-0334</p>

            <h2 className="text-2xl font-bold text-[#8B4513]">STORE HOURS</h2>
            <p className="text-lg">📅 Mon-Thu: 6:00 AM - 10:00 PM</p>
            <p className="text-lg">📅 Fri-Sat: 7:00 AM - 11:00 PM</p>
            <p className="text-lg">📅 Sun: 7:00 AM - 10:00 PM</p>

            <h2 className="text-2xl font-bold text-[#8B4513]">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61572997659114" target="_blank" className="text-blue-700 text-3xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/sunnysidecountrystore/" target="_blank" className="text-pink-600 text-3xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Sign-Up Form */}
          <div className="md:w-1/2 text-right px-6">
            <h2 className="text-2xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Sign Up</h2>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full p-3 border rounded-lg bg-gray-100" />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full p-3 border rounded-lg bg-gray-100" />
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border rounded-lg bg-gray-100" />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border rounded-lg bg-gray-100" />
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 border rounded-lg bg-gray-100 h-32"></textarea>
              <button type="submit" className="bg-[#8B4513] hover:bg-[#654321] text-white px-6 py-3 rounded-full text-lg">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;
