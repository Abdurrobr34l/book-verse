import Link from "next/link";
import books from "@/data/books.json";
import Image from "next/image";
import Container from "@/Utilities/Container";

export default function LandingPage() {
  return (
    <div className="space-y-10 lg:space-y-24">
      {/* ---------- Section 1: Hero ---------- */}
      <section className="min-h-[70vh] bg-base-200 py-10">
        <Container>
          <div className="hero-content flex-col lg:flex-row lg:justify-between lg:items-center p-0 2xl:px-10">
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
                src="/books/hero-image.avif"
                alt="Books illustration"
                className="rounded-lg shadow-lg w-full" width={500} height={300}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Section 2: Featured Books ---------- */}
      <section className="py-8">
        <Container className="min-h-[calc(100vh-148px)]">

          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.slice(0, 3).map((book) => (
              <div key={book.id} className="card bg-base-300 shadow-lg hover:shadow-xl transition">
                <Link href={`/items/${book.id}`}>
                  <figure className="px-4 pt-4">
                    <Image src={book.image} alt={book.title} className="rounded-lg h-60 object-cover w-full transition-transform duration-300 ease-linear hover:scale-[105%]" width={500} height={300} />
                  </figure>
                </Link>

                <div className="card-body">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="text-sm text-base-content line-clamp-3">{book.description}</p>
                  <p className="font-bold text-3xl text-primary mt-2">{book.price}<small className="font-bold">৳</small></p>
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
      <section className="py-8 bg-base-200">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Fiction", "Non-Fiction", "Mystery", "Science", "Self-Help"].map((cat) => (
            <span key={cat} className="badge badge-lg badge-secondary cursor-pointer p-4 font-semibold">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Section 4: Why BookVerse ---------- */}
      <section className="py-8">
        <Container>
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Why BookVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-secondary text-xl font-bold mb-2">Wide Selection</h3>
              <p>Thousands of books from all genres at your fingertips.</p>
            </div>
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-secondary text-xl font-bold mb-2">Easy Access</h3>
              <p>Quick search and browse features make finding books effortless.</p>
            </div>
            <div className="card bg-base-300 shadow hover:shadow-lg p-6 text-center">
              <h3 className="text-secondary text-xl font-bold mb-2">Community Reviews</h3>
              <p>Read honest reviews and ratings from real readers.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Section 5: Popular Authors ---------- */}
      <section className="py-8 bg-base-200">
        <Container>
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Popular Authors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-6 justify-items-center">
            {[
              { name: "James Clear", image: "/books-authors/james-clear.webp" },
              { name: "Paulo Coelho", image: "/books-authors/paulo-coelho.webp" },
              { name: "J.K. Rowling", image: "/books-authors/jk-rowling.jpeg" },
              { name: "George Orwell", image: "/books-authors/george-orwell.jpeg" },
              { name: "Malcolm Gladwell", image: "/books-authors/malcolm-gladwell.jpeg" },
              { name: "Agatha Christie", image: "/books-authors/agatha-christie.jpeg" }
            ].map((author) => (
              <div key={author.name} className="flex flex-col items-center space-y-2">
                <div className="avatar">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-center text-base-content">{author.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Section 6: Testimonials ---------- */}
      <section className="py-8">
        <Container>
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">What Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Wuin Jween",
                review: "BookVerse helped me discover amazing books I never knew!",
                image: "/reviewers/wuin-jween.jpg"
              },
              {
                name: "Rafi Ahmed",
                review: "The UI is clean and browsing is super easy.",
                image: "/reviewers/rafi-ahmed.jpg"
              },
              {
                name: "Alex Johnson",
                review: "Love the featured books and categories!",
                image: "/reviewers/alex-johnson.avif"
              },
            ].map((t, i) => (
              <div
                key={i}
                className="card bg-base-300 shadow p-6 hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={`${t.name} reviewer`}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <p className="italic text-base-content">{t.review}</p>
                <p className="font-bold mt-4 text-secondary">— {t.name}</p>
              </div>
            ))}
          </div>
        </Container>

      </section>

      {/* ---------- Section 7: Call to Action ---------- */}
      <section className="hero min-h-[40vh] bg-secondary text-primary-content py-14 mb-14">
        <div className="hero-content flex-col lg:flex-row justify-between items-center">
          <div className="text-center! lg:text-left space-y-4">
            <h2 className="text-3xl font-bold">Ready to explore your next book?</h2>
            <p className="text-lg">Join BookVerse today and start your reading journey!</p>
            <Link href="/login" className="btn btn-primary btn-lg mt-4 font-bold rounded-lg text-white">
              Login Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
