"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/Utilities/Container";
import toast, { Toaster } from "react-hot-toast";

export default function AddBookPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Book state (no id yet)
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
    description: "",
  });

  // Check authentication on mount
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (!loggedUser) {
      toast.error("You must be logged in to add a book!");
      router.push("/login");
    } else {
      setUser(JSON.parse(loggedUser));
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <Container className="py-20 text-center">
        <p className="text-xl">Checking authentication...</p>
      </Container>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate ID only at submit time (pure)
    const newBook = {
      ...book,
      id: Date.now(),
    };

    // Mock adding book (you can later push to JSON/Express API)
    console.log("New Book:", newBook);

    toast.success("Book added successfully!");

    // Redirect to items list page after 1 sec
    setTimeout(() => {
      router.push("/all-books");
    }, 1000);
  };

  return (
    <Container className="py-12">
      <Toaster position="top-right" />
      <h1 className="text-4xl font-bold mb-8 text-center">Add New Book</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={book.image}
          onChange={(e) => setBook({ ...book, image: e.target.value })}
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          className="textarea textarea-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary mt-4">
          Add Book
        </button>
      </form>
    </Container>
  );
}
