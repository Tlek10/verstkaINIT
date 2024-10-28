import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
      <Navbar/>
      <div className='px-20'>
        {children}
      </div>
      </body>
    </html>
  );
}
