"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, updateDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

function AdminDashboard() {
  const [fuelPrices, setFuelPrices] = useState({ regular: "", plus: "", premium: "" });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        fetchFuelPrices();
        fetchOrders();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchFuelPrices = async () => {
    const docRef = doc(db, "fuel_prices", "current");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFuelPrices(docSnap.data());
    }
    setLoading(false);
  };

  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const ordersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setOrders(ordersList);
  };

  const handleUpdatePrices = async () => {
    const docRef = doc(db, "fuel_prices", "current");
    await updateDoc(docRef, {
      regular: parseFloat(fuelPrices.regular),
      plus: parseFloat(fuelPrices.plus),
      premium: parseFloat(fuelPrices.premium),
    });
    alert("Fuel prices updated!");
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>
        
        <h3 className="text-xl font-semibold mb-2">Update Fuel Prices</h3>
        <input type="number" placeholder="Regular" value={fuelPrices.regular} onChange={(e) => setFuelPrices({ ...fuelPrices, regular: e.target.value })} className="w-full p-2 border mb-2 rounded" />
        <input type="number" placeholder="Plus" value={fuelPrices.plus} onChange={(e) => setFuelPrices({ ...fuelPrices, plus: e.target.value })} className="w-full p-2 border mb-2 rounded" />
        <input type="number" placeholder="Premium" value={fuelPrices.premium} onChange={(e) => setFuelPrices({ ...fuelPrices, premium: e.target.value })} className="w-full p-2 border mb-4 rounded" />
        <button onClick={handleUpdatePrices} className="bg-blue-600 text-white px-4 py-2 rounded">Update Prices</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-6">
        <h3 className="text-xl font-semibold mb-4">Customer Orders</h3>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="border-b py-2">
                <p><strong>Name:</strong> {order.customer_name}</p>
                <p><strong>Contact:</strong> {order.contact}</p>
                <p><strong>Order:</strong> {order.order_details}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;