import React from 'react';
import CardSlider from "@/app/about/Content/CardSlider";

const Hero: React.FC = () => {
    return (
        <>
            <section className="w-full relative bg-gray-50 py-15 px-8 text-center overflow-hidden flex items-center justify-between rounded-lg ">
                <div className="absolute inset-0 bg-[url('/img/about/texture.webp')] bg-cover bg-center opacity-5" />

                <div className="relative z-10 flex-1 px-6">
                    <div className="rounded-full px-4 py-2 inline-block mb-4">🔥 +6 месяцев обслуживания</div>
                    <h1 className="text-3xl font-bold text-gray-900">Веб-студия «init»</h1>
                    <p className="text-lg text-gray-700 mt-4">Бесплатная консультация</p>
                    <p className="text-gray-600 mt-2">Оставьте свой номер телефона, и мы Вам перезвоним</p>
                    <div className="mt-6 flex justify-center">
                        <input
                            type="text"
                            placeholder="+7 (___) ___-__-__"
                            className="border border-gray-300 rounded-l px-4 py-2"
                        />
                        <button className="bg-red-600 text-white px-6 py-2 rounded-r">Отправить</button>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="text-blue-600 hover:underline">SEO продвижение</a> |
                        <a href="#" className="text-blue-600 hover:underline ml-2">Интернет магазин</a>
                    </div>
                </div>

                <div className="flex-1">
                    <img src="/img/about/aboutUs.webp" alt="Веб-студия «init»" className="mt-6 mx-auto w-64 h-auto" />
                </div>
            </section>

            <section className="w-full mt-4 relative py-15 px-8 text-center flex items-center justify-between rounded-lg shadow-lg">
                <div className="absolute inset-0"></div>

                <div className="flex-1">
                    <img src="/img/about/phone.webp" alt="phone «init»" className="mt-6 mx-auto w-64 h-auto" />
                </div>

                <div className="flex-1 text-left px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">О нашей студии</h2>
                    <p className="text-gray-700 mb-4">
                        Основной задачей нашей веб студии является создание сайтов под ключ для разнообразных задач в сфере бизнеса.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Повышает имидж компании;</li>
                        <li>Поднимает степень доверия потребителей;</li>
                        <li>Привлекает новых потребителей;</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Сайт – это визитная карточка любого предприятия. Поэтому вам следует создать индивидуальный механизм, который поможет устанавливать контакт с клиентами и отвечать на поставленные ими вопросы для преодоления трудностей. Сайт – это не только инструмент для поднятия продаж, это полноценный интернет филиал компании.
                    </p>

                    <p className="text-lg text-gray-700 mt-4">Бесплатная консультация</p>
                    <p className="text-gray-600 mt-2">Оставьте свой номер телефона, и мы Вам перезвоним</p>
                    <div className="mt-6 flex justify-center">
                        <input
                            type="text"
                            placeholder="+7 (___) ___-__-__"
                            className="border border-gray-300 rounded-l px-4 py-2"
                        />
                        <button className="bg-red-600 text-white px-6 py-2 rounded-r">Отправить</button>
                    </div>
                </div>
            </section>

            <section class="section-steps section-padding">
                <h3>Этапы разработки сайта</h3>
                <CardSlider/>
            </section>
        </>
    );
};

export default Hero;
