import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Mom",
  description: "My first Next.js app, a sight about all beautiful aspects of motherhood.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <Header />
        <div className="main-content">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}