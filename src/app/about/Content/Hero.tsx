import React from 'react';

const Hero: React.FC = () => {
    return (
        <>
            <section className="relative bg-gray-50 py-15 px-4 text-center overflow-hidden flex items-center justify-between max-w-4xl mx-auto rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-[url('/img/about/texture.webp')] bg-cover bg-center opacity-5" />

                {/* Левый блок с текстом */}
                <div className="relative z-10 flex-1">
                    <div className="rounded-full px-4 py-2 inline-block mb-4">
                        🔥 +6 месяцев обслуживания
                    </div>
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

                {/* Правый блок с изображением */}
                <div className="flex-1">
                    <img src="/img/about/aboutUs.webp" alt="Веб-студия «init»" className="mt-6 mx-auto w-64 h-auto" />
                </div>
            </section>

            <section className="about-us">
                <div className="container">
                    <div className="wrapper">
                        <div className="image">
                            <div className="circles"></div>
                            <img
                                src="/img/about/phone.webp"
                                loading="lazy"
                                alt="Создание сайтов Алматы от профессионалов – просто и выгодно!"
                            />
                            <div className="circles"></div>
                        </div>

                        <div className="content article-md article-block">
                            <h3>О нашей студии</h3>
                            <p>Основной задачей нашей веб студии является создание сайтов под ключ для разнообразных задач в сфере бизнеса.</p>

                            <ul>
                                <li>Повышает имидж компании;</li>
                                <li>Поднимает степень доверия потребителей;</li>
                                <li>Привлекает новых потребителей;</li>
                            </ul>

                            <p>
                                Сайт – это визитная карточка любого предприятия. Поэтому вам следует создать индивидуальный механизм, который поможет устанавливать контакт с клиентами и отвечать на поставленные ими вопросы для преодоления трудностей.
                                Сайт – это не только инструмент для поднятия продажи, это полноценный интернет филиал компании.
                            </p>

                            <div className="order-form-wrapper article">
                                <div className="article-sm">
                                    <div className="h5">Бесплатная консультация</div>
                                    <div className="grey-text lg-text">Оставьте свой номер телефона, и мы Вам перезвоним</div>
                                </div>
                                <form className="consultation-form regular-color">
                                    <input type="text" className="large phone-mask grow phone outline" id="consultation_phone" />
                                    <button className="btn large order-send" data-form="Бесплатная консультация">
                                        <span className="text">Отправить</span>
                                    </button>

                                    <div className="hide-sm">
                                        <a href="https://wa.me/+77078188189?text=Здравствуйте, хочу заказать создание сайта" rel="nofollow" target="_blank" className="btn large green-theme no-uppercase large-before">
                                            <span className="text">Связаться по WhatsApp</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
