import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white">
            <div className="text-2xl font-bold text-red-600">init</div>
            <nav className="space-x-6">
                <a href="#" className="text-gray-700">Главная</a>
                <a href="#" className="text-gray-700">О компании</a>
                <a href="#" className="text-gray-700">Блог</a>
                <a href="#" className="text-gray-700">Вакансии</a>
                <a href="#" className="text-gray-700">Контакты</a>
            </nav>
            <div className="text-red-600">+7 707 818 81 89</div>
        </header>
    );
};

export default Header;
