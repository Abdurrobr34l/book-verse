# BookVerse

## Short Project Description

BookVerse is a simple book catalog web application built using **Next.js (App Router)**. Users can browse books, view detailed information, and explore descriptions. A mock authentication system allows authorized users to add new books. The application uses a **JSON file** or Express API as its data source to demonstrate routing, authentication, and protected pages.

---

## List of Implemented Features

- **Landing Page**

  - 7 sections: Hero, About, Featured Books, Categories, Popular Authors, Testimonials, Contact
  - Navbar with links to Login and Books pages
  - Footer

- **Mock Authentication**

  - Hardcoded email & password
  - Cookie-based login to protect restricted routes

- **Book List Page**

  - Displays all books fetched from JSON/Express API
  - Shows book title, description, price, and image

- **Book Details Page**

  - Shows full information of a selected book
  - Uses dynamic routing (`/books/[id]`)

- **Protected Page: Add Book**

  - Accessible only to logged-in users
  - Form to add new books
  - Stores data via JSON file or Express API

- **Optional Enhancements**
  - Toast notifications for successful actions (e.g., book added)

---

## Brief Explanation of Features

- **Landing Page:**  
  Public page showcasing Hero, About, Featured Books, Categories, Popular Authors, Testimonials, and Contact sections.

- **Authentication:**  
  Mock login protects `/books/add`. Stores credentials in cookies. Optional integration with NextAuth.js for social login.

- **Book List Page:**  
  Public page that fetches books from JSON/Express API and displays their information.

- **Book Details Page:**  
  Public page that shows full details of a single selected book using dynamic routing.

- **Add Book (Protected Page):**  
  Form for logged-in users to add new books. Data stored via JSON file or Express API.

- **Toast Notifications:**  
  Optional feature to show success messages when books are added or actions are completed.

---

## Sample JSON Structure for Books

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A novel about the American dream and societal excess.",
    "price": 12.99,
    "image": "/images/gatsby.jpg"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel about totalitarianism and surveillance.",
    "price": 10.99,
    "image": "/images/1984.jpg"
  }
]
```

## Technologies Used

```
Frontend: Next.js 15/16 (App Router), React 19

Backend / Data: Express.js API or JSON file

Styling: TailwindCSS (DaisyUI optional)

Authentication: Cookies for mock login (NextAuth.js optional for social login)
```

## Setup & Installation Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Abdurrobr34l/book-verse.git
cd book-verse
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```
