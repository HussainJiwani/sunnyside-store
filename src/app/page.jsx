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

      setSuccessMessage("✅ Sign-up successful!");
      
      // Clear form after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("❌ Error signing up:", error);
      setSuccessMessage("❌ Failed to sign up. Please try again.");
    }
  };

  console.log("🔹 Function Loaded ✅"); // ✅ Log if function exists
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-200 font-['Josefin Sans']">
      
      
      

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-white text-center px-4 py-16 md:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Dark Overlay to Improve Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 tracking-wide">
            We're Open
          </h2>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
            Sunnyside Country Store
          </h1>
          <h3 className="text-4xl md:text-5xl font-semibold mb-2">
            Where Community Meets Convenience!
          </h3>
          <p className="text-lg md:text-3xl max-w-3xl leading-snug text-center">
          Serving Coffee,  Deli, Drinks, Pizza, Beer, & More
          </p>
        </div>
         {/* Blinking Call to Action */}
        <a href="tel:+17069380334" className="bg-white text-[#8B4513] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition animate-pulse mt-8">
         📞 Order Now: (706) 938-0334
       </a>
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
              <h3 className="text-2xl font-bold">Fuel- Will Open Soon</h3>
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
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12 px-6">
          
          {/* Left Column - Contact Details */}
          <div className="md:w-1/2 space-y-8">
            
            {/* Address */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">📍 ADDRESS</h2>
              <p className="text-lg">3108 Crest Hwy Ste B, Thomaston, GA 30286, United States</p>
            </div>

            {/* Phone */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">📞 PHONE</h2>
              <p className="text-lg">+1-706-938-0334</p>
            </div>

            {/* Email */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">📧 EMAIL</h2>
              <p className="text-lg">
                <a href="mailto:info@sunnysidecountrystore.com" className="text-[#8B4513] hover:underline">
                  info@sunnysidecountrystore.com
                </a>
              </p>
            </div>

            {/* Store Hours */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">⏰ STORE HOURS</h2>
              <p className="text-lg">Mon-Thu: <span className="font-semibold">6:00 AM - 10:00 PM</span></p>
              <p className="text-lg">Fri-Sat: <span className="font-semibold">7:00 AM - 11:00 PM</span></p>
              <p className="text-lg">Sun: <span className="font-semibold">7:00 AM - 10:00 PM</span></p>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">🔗 FOLLOW US</h2>
              <div className="flex space-x-6 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61572997659114" target="_blank" className="text-blue-700 text-4xl hover:text-blue-900 transition">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/sunnysidecountrystore/" target="_blank" className="text-pink-600 text-4xl hover:text-pink-800 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>
          
          {/* Right Column - Sign Up Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Sign Up</h2>
            {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}
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
