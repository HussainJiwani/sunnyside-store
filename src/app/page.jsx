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

      <footer className="bg-amber-700 text-white py-8 text-center">
        <p>© 2025 Sunnyside Country Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;
