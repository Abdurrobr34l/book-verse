"use client";

import Container from "@/Utilities/Container";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoImage from "../../public/logo.png";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  // Toggle theme
  useEffect(() => {
    const theme = dark ? "bookverse-dark" : "bookverse-light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [dark]);

  return (
    <nav className="navbar bg-base-200/50 sticky top-0 py-4 z-50 backdrop-blur-md shadow">
      <Container>
        <div className="w-full flex justify-between items-center">

          {/* ---------- Navbar Start ---------- */}
          <div className="navbar-start">

            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/">Home</Link></li>
                <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/all-books">Books</Link></li>
                <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/add-book">Add Book</Link></li>
                <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/login">Login</Link></li>
              </ul>
            </div>

            {/* Logo */}
            <Link href="/" className="btn btn-ghost text-xl">
              <Image
                src={logoImage}
                alt="BookVerse Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* ---------- Navbar Center (Desktop) ---------- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/">Home</Link></li>
              <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/all-books">Books</Link></li>
              <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/add-book">Add Book</Link></li>
              <li><Link className="font-semibold hover:text-accent hover:bg-transparent" href="/login">Login</Link></li>
            </ul>
          </div>

          {/* ---------- Navbar End ---------- */}
          <div className="navbar-end">
            <label className="swap swap-rotate">
              {/* checkbox controls the theme */}
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark(!dark)}
              />

              {/* light mode icon */}
              <FiSun className="swap-off h-7 w-7 text-accent" />

              {/* dark mode icon */}
              <FiMoon className="swap-on h-7 w-7 text-accent" />
            </label>
          </div>


        </div>
      </Container>
    </nav>
  );
}
