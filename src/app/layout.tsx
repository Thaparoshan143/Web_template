import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next Web-App",
  description: "template web next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-w-full min-h-screen flex flex-col justify-evenly items-center"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
