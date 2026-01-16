import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Container from "@/Utilities/Container";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookVerse",
  description: "A Book Catalog & Reading Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bookverse-dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {/* <Container className="min-h-[calc(100vh-148px)]"> */}
          {children}
        {/* </Container> */}

        <Footer />
      </body>
    </html>
  );
}
