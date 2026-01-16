import Link from "next/link";
import books from "@/data/books.json";
import Image from "next/image";
import Container from "@/Utilities/Container";

export default function LandingPage() {
  return (
    <div className="space-y-24">

      {/* ---------- Section 1: Hero ---------- */}
      <section className="min-h-[70vh] bg-base-200 rounded-lg p-8">
        <Container>
          <div className="hero-content flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="text-center lg:text-left lg:max-w-lg space-y-6">
              <h1 className="text-5xl font-bold text-primary">Welcome to BookVerse</h1>
              <p className="text-lg text-base-content">
                Explore the universe of books. Discover your next favorite read today!
              </p>
              <Link href="/items" className="btn btn-primary btn-lg">
                Browse Books
              </Link>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image
                src="/books/hero-books.png"
                alt="Books illustration"
                className="rounded-lg shadow-lg w-full" width={500} height={300}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Section 2: Featured Books ---------- */}
      <section className="p-8">
        <Container className="min-h-[calc(100vh-148px)]">

          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.slice(0, 3).map((book) => (
              <div key={book.id} className="card bg-base-300 shadow-lg hover:shadow-xl transition">
                <figure className="px-4 pt-4">
                  <Image src={book.image} alt={book.title} className="rounded-lg h-60 object-cover w-full" width={500} height={300} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="text-sm text-base-content line-clamp-3">{book.description}</p>
                  <p className="font-bold text-primary mt-2">৳{book.price}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link href={`/items/${book.id}`} className="btn btn-secondary btn-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Section 3: Categories ---------- */}
      <section className="p-8 bg-base-200 rounded-lg">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Fiction", "Non-Fiction", "Mystery", "Science", "Self-Help"].map((cat) => (
            <span key={cat} className="badge badge-lg badge-secondary cursor-pointer">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Section 4: Why BookVerse ---------- */}
      <section className="p-8">
        <Container>

          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Why BookVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p>Thousands of books from all genres at your fingertips.</p>
            </div>
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Easy Access</h3>
              <p>Quick search and browse features make finding books effortless.</p>
            </div>
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Community Reviews</h3>
              <p>Read honest reviews and ratings from real readers.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Section 5: Popular Authors ---------- */}
      <section className="p-8 bg-base-200 rounded-lg">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">Popular Authors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {["James Clear", "Paulo Coelho", "J.K. Rowling", "George Orwell", "Malcolm Gladwell", "Agatha Christie"].map((author) => (
            <div key={author} className="flex flex-col items-center space-y-2">
              <div className="avatar">
                <div className="w-24 h-24 rounded-full bg-neutral"></div>
              </div>
              <p className="text-center text-base-content">{author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Section 6: Testimonials ---------- */}
      <section className="p-8">
        <Container>
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">What Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Aisha", review: "BookVerse helped me discover amazing books I never knew!" },
              { name: "Rafi", review: "The UI is clean and browsing is super easy." },
              { name: "Sara", review: "Love the featured books and categories!" },
            ].map((t, i) => (
              <div key={i} className="card bg-base-300 shadow p-6 hover:shadow-lg transition">
                <p className="italic text-base-content">{t.review}</p>
                <p className="font-bold mt-4 text-primary">- {t.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Section 7: Call to Action ---------- */}
      <section className="hero min-h-[40vh] bg-primary rounded-lg text-primary-content p-8">
        <div className="hero-content flex-col lg:flex-row justify-between items-center">
          <div className="text-center! lg:text-left space-y-4">
            <h2 className="text-5xl font-bold">Ready to explore your next book?</h2>
            <p className="text-lg">Join BookVerse today and start your reading journey!</p>
            <Link href="/login" className="btn btn-secondary btn-lg mt-4">
              Login Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
