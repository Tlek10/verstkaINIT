import React from 'react';
import logo from '../img/logo.svg';
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Blog() {
    return (
        <div className='flex flex-col w-full'>
            <Navbar/>
            <h1 className='text-[56px]'>Блог</h1>
        </div>
    );
}
