import React from 'react';
import './styles.css';

export default function About() {
    return (
        <header className="header flex justify-between items-center p-6 bg-white">
            <nav className="space-x-6">
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
    );
}
