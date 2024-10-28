import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import Header from "@/components/HeaderComp/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
      <Header/>
      <Navbar/>
      <div className='px-20'>
        {children}
      </div>
      </body>
    </html>
  );
}
