import logo from "@/app/img/logo.svg";
import Link from "next/link";
import React from "react";

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
        <div className='w-full flex m-5 flex-row justify-between'>
            <div>
                <img className="w-3 h-3" src={logo} alt="logo"/>
            </div>
            <div className='w-1/2 flex space-x-3 text-sm items-center '>
                {navLinks.map((link) => (
                    <Link className='hover:text-red-600' href={link.linkUrl} key={link.linkId}>
                        <span className="mr-4 hover:text-red">{link.linkName}</span>
                    </Link>
                ))}
                <button
                    className='transition-all hover:text-white hover:bg-red-600 text-xs w-[170px] h-[35px] border-[1px]'>ЛИЧНЫЙ
                    КАБИНЕТ
                </button>
            </div>
        </div>
    )
}

export default Navbar;

