import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Home/Navbar/nav";
import Footer from "./Footer/page";









const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachana Yadav Portfolio",
  description: "portfolio website built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0B0E1A]`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
