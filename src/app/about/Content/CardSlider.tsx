"use client";

import React from 'react';

const cardData = [
    { subtitle: "Как это работает", title: "Время действовать", link: "/order/" },
    { subtitle: "Как это работает", title: "Следующий шаг", link: "/order/" },
    { subtitle: "Как это работает", title: "Готовы начать", link: "/order/" },
    { subtitle: "Как это работает", title: "Ваша идея", link: "/order/" },
    { subtitle: "Как это работает", title: "Не откладывайте", link: "/order/" },
    { subtitle: "Как это работает", title: "Ваш успех", link: "/order/" },
    { subtitle: "Как это работает", title: "Преимущества", link: "/order/" },
    { subtitle: "Как это работает", title: "Присоединяйтесь к нам", link: "/order/" },
    { subtitle: "Как это работает", title: "Зарабатывайте больше", link: "/order/" },
];

const Card = ({ subtitle, title, link }) => (
    <div className="item title icon-arrow-right border p-4 rounded-lg shadow-md bg-white mb-4">
        <div className="subtitle text-sm text-gray-600">{subtitle}</div>
        <div className="title text-lg font-bold mt-2">{title}</div>
        <a href={link} className="more text-red-600 mt-4 block">
            Отправить заявку <span className="icon icon-right"></span>
        </a>
    </div>
);

const CardSlider = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Gap applied here */}
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
