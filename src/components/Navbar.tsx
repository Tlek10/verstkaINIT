import Link from "next/link";
import Image from "next/image";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
        <nav className='px-10 lg:px-16 md:px-14 flex justify-center'>
            <div className='mt-3 w-full flex justify-between items-center'>
                <Image width={50} height={40} className='min-w-10 max-w-24 md:min-w-12' src='/assets/img/logo.svg' alt="logo"/>
                <div>
                    <div className='hidden md:flex items-center md:text-xs gap-6'>
                        {navLinks.map((link) => (
                            <Link className='hover:text-red-500'
                                  href={link.linkUrl}
                                  key={link.linkId}> {link.linkName}
                            </Link>
                        ))}
                        <button
                            className='transition-all hover:text-white hover:bg-red-500 w-52 h-10 md:w-40 md:h-8 md:text-xs shadow-sm border-[1px]'>ЛИЧНЫЙ
                            КАБИНЕТ
                        </button>
                    </div>
                </div>
                <AccountCircleOutlinedIcon fontSize='large' className="md:hidden"/>
            </div>
        </nav>
    )
}

export default Navbar;

