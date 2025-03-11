"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Papa from "papaparse";

function AdminDashboard() {
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/admin/login"); // Redirect if not logged in
        } else {
          fetchSignups();
        }
      });
    };

    const fetchSignups = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "signups"));
        const signupData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSignups(signupData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching signups:", error);
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // ✅ Function to Export Data as CSV
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

  // ✅ Logout Function
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Sign-Ups</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Collected Sign-Up Information</h2>

        {loading ? (
          <p>Loading...</p>
        ) : signups.length === 0 ? (
          <p>No sign-ups yet.</p>
        ) : (
          <>
            <button
              onClick={exportToCSV}
              className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
            >
              Download CSV 📂
            </button>

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
          </>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded mt-6 hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
