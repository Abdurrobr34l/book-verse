"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/Utilities/Container";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded demo credentials
  const DEMO_EMAIL = "demoAdmin@bookverse.com";
  const DEMO_PASSWORD = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Save login info in localStorage
      localStorage.setItem("user", JSON.stringify({ email }));

      toast.success("Login successful!");

      // Redirect to item list page
      router.push("/all-books");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  const handleAutofill = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    toast("Credentials filled!", { icon: "✅" });
  };

  return (
    <section className="min-h-[calc(100vh-174px)]">
      <Container className="py-20">
        <Toaster position="top-right" />
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 max-w-md mx-auto bg-base-300 px-6 py-12 rounded-lg"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <div className="flex gap-4 mt-4">
            <button type="submit" className="btn btn-primary flex-1">
              Login
            </button>
            <button
              type="button"
              onClick={handleAutofill}
              className="btn btn-secondary flex-1"
            >
              Autofill
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
