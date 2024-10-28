import React from 'react';
import '../../components/HeaderComp/styles.css';
import Navbar from "@/components/Navbar";
import Header from "@/components/HeaderComp/Header";

export default function About() {
    return (
        <div className='flex flex-col w-full'>
            <Header/>
            <Navbar/>
        </div>

);
}
