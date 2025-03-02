"use client"; // First line

import { useState, useEffect } from 'react';
import { db } from "@/firebaseConfig";
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

function MainComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [fuelPrices, setFuelPrices] = useState({ regular: 0, plus: 0, premium: 0 });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFuelPrices = async () => {
      const docRef = doc(db, "fuel_prices", "current");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFuelPrices(docSnap.data());
      }
    };
    fetchFuelPrices();
  }, []);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "orders"), {
        customer_name: name,
        contact: contact,
        order_details: orderDetails,
        timestamp: serverTimestamp(),
      });
      setMessage("Order placed successfully!");
      setName("");
      setContact("");
      setOrderDetails("");
    } catch (error) {
      console.error("Error placing order:", error);
      setMessage("Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-amber-100 font-serif">
      {/* Navigation Bar */}
      <nav className="bg-amber-700 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-white text-3xl font-bold">
            🏡 Sunnyside Country Store
          </a>
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

       {/* Hero Section */}
       <section id="home" className="relative h-[600px] flex items-center justify-center">
        <img src="/gasstation.png" alt="Sunnyside Country Store" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Sunnyside Country Store</h1>
          <p className="text-xl md:text-2xl mb-8">Your Community Hub for Essentials & More</p>
          <a href="#store" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg">
            Explore Our Store
          </a>
        </div>
      </section>


      {/* Fuel Prices Section */}
      <section id="fuel" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Today's Fuel Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Regular</h3>
              <p className="text-4xl text-amber-700">${fuelPrices.regular}</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Plus</h3>
              <p className="text-4xl text-amber-700">${fuelPrices.plus}</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-4xl text-amber-700">${fuelPrices.premium}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-16 bg-yellow-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Store Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="/fresh-produce.jpg" alt="Fresh Produce" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Fresh Produce</h3>
              <p className="text-gray-600">Locally sourced fruits and vegetables.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="/bakery-items.jpg" alt="Bakery Items" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Bakery Delights</h3>
              <p className="text-gray-600">Freshly baked goods daily.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="/grocery-items.jpg" alt="Grocery Items" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Grocery Essentials</h3>
              <p className="text-gray-600">All your daily needs in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section id="order" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Place Your Order Online</h2>
          {message && <p className="text-green-600">{message}</p>}
          <form onSubmit={handleOrderSubmit} className="max-w-lg mx-auto bg-yellow-50 p-8 rounded-xl shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Your Contact" className="w-full p-3 mb-4 border rounded" value={contact} onChange={(e) => setContact(e.target.value)} required />
            <textarea placeholder="Order Details" className="w-full p-3 mb-4 border rounded" value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} required />
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
              Submit Order
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-yellow-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">Have any questions? Reach out to us!</p>
          <p className="text-lg text-gray-700">Email: info@sunnysidecountrystore.com</p>
          <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
        </div>
      </section>

      <footer className="bg-amber-700 text-white py-8 text-center">
        <p>© 2025 Sunnyside Country Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;
