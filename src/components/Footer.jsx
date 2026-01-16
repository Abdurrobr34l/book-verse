"use client";
import Container from "@/Utilities/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content py-8">
      <Container className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo / Brand */}
        <div className="text-xl font-bold text-primary mb-4 md:mb-0">
          <Link href="/">BookVerse</Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/" className="font-medium hover:text-accent">Home</Link>
          <Link href="/" className="font-medium hover:text-accent">About Us</Link>
          <Link href="/all-books" className="font-medium hover:text-accent">Books</Link>
          <Link href="/add-book" className="font-medium hover:text-accent">Add Book</Link>
          <Link href="/login" className="font-medium hover:text-accent">Login</Link>
        </div>

        {/* Center: Social / Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} BookVerse. All rights reserved.
        </div>


      </Container>
    </footer>
  );
}
