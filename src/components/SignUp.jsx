"use client";

import { useState } from "react";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account created successfully!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-yellow-50 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-[#8B4513] mb-6 uppercase tracking-widest">Sign Up</h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-4">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border rounded-lg bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg bg-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-[#8B4513] hover:bg-[#654321] text-white px-6 py-3 rounded-full text-lg">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
