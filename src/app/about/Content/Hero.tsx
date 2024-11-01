const Hero = () => {
    return (
        <div className="relative bg-cover bg-center">
            <div className="absolute inset-0 bg-gray-500 bg-hero-texture bg-cover bg-center opacity-[0.05]"></div>
            <div className="relative z-10 p-10 md:p-14">
                <div className="flex justify-center items-center bg-white w-64 mb-4 h-8">
                    <span>🔥 +6 месяцев обслуживания</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Веб-студия «init»</h1>
                <p className="text-gray-600 mb-6">Бесплатная консультация</p>
                <p className="text-gray-600 mb-4">Оставьте свой номер телефона и мы Вам перезвоним</p>
                <input
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full p-3 mb-4 placeholder-black border-gray-300 focus:outline-none border-2 focus:border-red-300 transition-all"
                />
                <button className="w-full bg-[#ff1413] text-white py-3 font-bold hover:bg-red-600">
                    ОТПРАВИТЬ
                </button>
                <button
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-bold mt-4 flex items-center justify-center hover:bg-green-600">
                    <span className="mr-2">🟢</span> Заявка на WhatsApp
                </button>
                <div className="flex justify-around mt-6">
                    <a href="#" className="text-blue-500 underline">SEO продвижение</a>
                    <a href="#" className="text-blue-500 underline">Интернет магазин</a>
                </div>
                <div className="mt-6 flex justify-center">
                    <a href="#" className="text-gray-600 flex items-center">
                        <span>⬇️</span> Смотреть дальше
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
