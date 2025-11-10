import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-geist-sans",
  weight: ["600", "700", "500", "400", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trendlama",
  description: "Wonderful learning place for fullstack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="mx-auto p-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl max-w-xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
