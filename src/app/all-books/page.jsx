import React from 'react'
import Container from '@/Utilities/Container'
import books from "@/data/books.json";
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <section className="py-12">
      <Container>

        <h2 className="text-5xl font-bold text-primary mb-12">All Books ({books.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-300 shadow-lg hover:shadow-xl transition">
              <Link href={`/all-books/${book.id}`}>
                <figure className="px-4 pt-4">
                  <Image src={book.image} alt={book.title} className="rounded-lg h-60 object-cover w-full transition-transform duration-300 ease-linear hover:scale-[105%]" width={500} height={300} />
                </figure>
              </Link>

              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="text-sm text-base-content line-clamp-3">{book.description}</p>
                <p className="font-bold text-3xl text-primary mt-2">{book.price}<small className="font-bold">৳</small></p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/all-books/${book.id}`} className="btn btn-secondary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
