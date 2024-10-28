import logo from "@/app/img/logo.svg";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="header flex justify-between items-center p-6 bg-white">
            <nav className="space-x-6" style={{ margin: '0 136.825px 0 0' }}>
                <a href="#" className="text-gray-700">Главная</a>
                <a href="#" className="text-gray-700">О компании</a>
                <a href="#" className="text-gray-700">Блог</a>
                <a href="#" className="text-gray-700">Вакансии</a>
                <a href="#" className="text-gray-700">Контакты</a>
            </nav>
            <div className="display flex space justify-between">
                <div className="">г. Алматы пр. Ал-Фараби 7, блок 5А, 29 этаж, офис 3</div>
                <a className="text-red-600" href="tel:+77078188189" rel="nofollow">+7 707 818 81 89</a>
            </div>
        </header>
    )
}

export default Header;