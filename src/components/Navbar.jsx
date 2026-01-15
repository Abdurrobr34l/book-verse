"use client";
import Container from "@/Utilities/Container";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoImage from "../../public/logo.png";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Toggle theme
  useEffect(() => {
    const theme = dark ? "bookverse-dark" : "bookverse-light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [dark]);

  return (
    <nav className="bg-base-200/80 sticky top-0 z-50 w-full shadow backdrop-blur-md">
      <Container>
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Site Name */}
          <div className="shrink-0 font-bold text-2xl text-primary">
            <Link href="/">
              <Image src={logoImage} alt="It is website logo" width={50} height={50} priority/>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="btn btn-ghost btn-sm">Home</Link>
            <Link href="/items" className="btn btn-ghost btn-sm">Books</Link>
            <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
