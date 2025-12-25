"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, mock submission
    console.log({ email, password });
    alert("Account created (mock)!");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center">Create your account</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded-xl text-sm font-medium"
        >
          Create Account
        </button>
      </form>
    </main>
  );
}
