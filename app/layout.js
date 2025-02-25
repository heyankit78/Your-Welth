// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Welth",
  description: "One stop finance solution",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
      <Header/>
      <main className="min-h-screen"> {children}</main>
      <Toaster/>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with love by Ankit</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
