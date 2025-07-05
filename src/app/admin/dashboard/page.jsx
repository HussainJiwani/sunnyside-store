"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Papa from "papaparse";

function AdminDashboard() {
  const [signups, setSignups] = useState([]);
  const [fuelPrices, setFuelPrices] = useState({
    regular: "",
    premium: "",
    offroad: "",
    diesel: "",
  });
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/admin/login");
        } else {
          fetchSignups();
          fetchFuelPrices();
          fetchOrders();
        }
      });
    };

    const fetchSignups = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "signups"));
        setSignups(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching signups:", error);
      }
    };

    const fetchFuelPrices = async () => {
      try {
        const docRef = doc(db, "fuel_prices", "current");
        const docSnap = await getDocs(collection(db, "fuel_prices"));
        if (!docSnap.empty) {
          setFuelPrices(docSnap.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching fuel prices:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        setOrders(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    checkAuth();
  }, [router]);

  const updateFuelPrices = async () => {
    try {
      const docRef = doc(db, "fuel_prices", "current");
      await updateDoc(docRef, fuelPrices);
      alert("Fuel prices updated successfully!");
    } catch (error) {
      console.error("Error updating fuel prices:", error);
    }
  };

  const exportToCSV = () => {
    const csvData = signups.map((signup) => ({
      Name: `${signup.firstName} ${signup.lastName}`,
      Email: signup.email,
      Phone: signup.phone,
      Message: signup.message,
      Date: signup.timestamp ? new Date(signup.timestamp.seconds * 1000).toLocaleDateString() : "N/A",
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "signups.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Fuel Price Update Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Update Fuel Prices</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Regular Price"
            className="p-3 border rounded"
            value={fuelPrices.regular}
            onChange={(e) => setFuelPrices({ ...fuelPrices, regular: e.target.value })}
          />
          <input
            type="text"
            placeholder="Premium Price"
            className="p-3 border rounded"
            value={fuelPrices.premium}
            onChange={(e) => setFuelPrices({ ...fuelPrices, premium: e.target.value })}
          />
          <input
            type="text"
            placeholder="Offroad Price"
            className="p-3 border rounded"
            value={fuelPrices.offroad}
            onChange={(e) => setFuelPrices({ ...fuelPrices, offroad: e.target.value })}
          />
          <input
            type="text"
            placeholder="Diesel Price"
            className="p-3 border rounded"
            value={fuelPrices.diesel}
            onChange={(e) => setFuelPrices({ ...fuelPrices, diesel: e.target.value })}
          />
        </div>

        <button onClick={updateFuelPrices} className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
          Update Prices
        </button>
      </div>

      {/* Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Orders</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Customer Name</th>
                <th className="border p-2">Contact</th>
                <th className="border p-2">Order Details</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="border p-2">{order.customer_name}</td>
                  <td className="border p-2">{order.contact}</td>
                  <td className="border p-2">{order.order_details}</td>
                  <td className="border p-2">{new Date(order.timestamp.seconds * 1000).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Sign-Ups Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">User Sign-Ups</h2>
        {signups.length === 0 ? (
          <p>No sign-ups yet.</p>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Message</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {signups.map((signup) => (
                <tr key={signup.id} className="border-t">
                  <td className="border p-2">{signup.firstName} {signup.lastName}</td>
                  <td className="border p-2">{signup.email}</td>
                  <td className="border p-2">{signup.phone}</td>
                  <td className="border p-2">{signup.message}</td>
                  <td className="border p-2">{signup.timestamp ? new Date(signup.timestamp.seconds * 1000).toLocaleDateString() : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button onClick={exportToCSV} className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">
          Download CSV
        </button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded mt-6 hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
