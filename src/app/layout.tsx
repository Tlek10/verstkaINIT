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
        <body>
        <Header />
        <Navbar />
        <div className="container mx-auto px-8 max-w-screen-xl">
            {children}
        </div>
        </body>
        </html>
    );
}
