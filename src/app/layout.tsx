import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import Header from "@/components/Header";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <Navbar/>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
