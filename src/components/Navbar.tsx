import logo from "@/public/img/logo.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type NavbarLink = {
    linkId: string;
    linkName: string;
    linkUrl: string;
}

const navLinks: NavbarLink[] = [
    {linkId: '1', linkName: 'Портфолио', linkUrl: '/'},
    {linkId: '2', linkName: 'Услуги', linkUrl: '/services'},
    {linkId: '3', linkName: 'Цены', linkUrl: '/prices'},
    {linkId: '4', linkName: 'SEO продвижение', linkUrl: '/seo'}
];

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='mt-3 max-w-screen-xl w-full flex justify-between items-center'>
                <div>
                    <Image className="w-[50px] h-[40px]" src={logo} alt="logo"/>
                </div>
                <div className='w-1/2 flex space-x-3 text-sm items-center '>
                    {navLinks.map((link) => (
                        <Link className='hover:text-red-500' href={link.linkUrl} key={link.linkId}>
                            <span className="mr-4">{link.linkName}</span>
                        </Link>
                    ))}
                    <button
                        className='transition-all hover:text-white hover:bg-red-500 text-xs w-[170px] h-[35px] shadow-sm border-[1px]'>ЛИЧНЫЙ
                        КАБИНЕТ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

