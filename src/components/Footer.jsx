"use client";
import Container from "@/Utilities/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-5">
      <Container className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo / Brand */}
        <div className="text-xl font-bold text-primary mb-4 md:mb-0">
          <Link href="/">BookVerse</Link>
        </div>

        {/* Center: Social / Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} BookVerse. All rights reserved.
        </div>

        {/* Right: Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/items" className="hover:text-primary">Books</Link>
          <Link href="/login" className="hover:text-primary">Login</Link>
        </div>

      </Container>
    </footer>
  );
}
