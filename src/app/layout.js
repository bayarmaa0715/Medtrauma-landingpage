import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <main className="container w-full px-4 ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
