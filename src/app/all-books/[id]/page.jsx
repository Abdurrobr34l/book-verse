"use client";

import { useParams } from "next/navigation";
import Container from "@/Utilities/Container";
import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function BookDetailsPage() {
  const params = useParams();       // Next.js hook for dynamic params
  const id = params?.id;            // safely get id
  const book = books.find((b) => b.id.toString() === id); // convert id to string

  if (!book) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-3xl font-bold text-error">Book not found</h2>
        <Link href="/all-books" className="btn btn-primary mt-6">
          Back to Books
        </Link>
      </Container>
    );
  }

  const handleAddToCart = () => {
    // You can later push this to cart state or API
    toast.success(`${book.title} added to cart!`);
  };

  return (
    <section className="py-12">
      <Toaster position="top-right" /> {/* Toast container */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Book Image */}
          <div className="lg:w-1/3">
            <Image
              src={book.image}
              alt={book.title}
              width={500}
              height={700}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Book Details */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-5xl font-bold text-primary">{book.title}</h1>
            <p className="text-xl text-secondary font-semibold">By {book.author}</p>
            <p className="text-base-content text-lg">{book.description}</p>
            <p className="text-3xl font-bold text-primary">৳{book.price}</p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/all-books" className="btn btn-secondary">
                Back to Books
              </Link>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
