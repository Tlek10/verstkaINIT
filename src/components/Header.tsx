import Link from "next/link";

const Header = () => {
    return (
        <nav className="hidden h-6 md:flex justify-between items-center text-xs px-10 lg:px-16 md:px-14 p-6 border-b-[0.5px]">
            <div className="space-x-5 text-gray-400">
                <Link href="#" className="hover:text-red-500">Главная</Link>
                <Link href="#" className="hover:text-red-500">О компании</Link>
                <Link href="#" className="hover:text-red-500">Блог</Link>
                <Link href="#" className="hover:text-red-500">Вакансии</Link>
                <Link href="#" className="hover:text-red-500">Контакты</Link>
            </div>
            <div className="flex justify-between space-x-5">
                <p className="text-gray-400">г. Алматы пр. Ал-Фараби 7, блок 5А, 29 этаж, офис 3</p>
                <Link className="text-red-600" href="tel:+77078188189" rel="nofollow">+7 707 818 81 89</Link>
            </div>
        </nav>
    );
};

export default Header;