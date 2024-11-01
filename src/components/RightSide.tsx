import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from 'next/image'

const rightSide = () => {
    return (
        <aside className='md:w-60 xl:w-72'>
            <div className='rounded-md shadow-md border-t-[0.5px] flex flex-col font-bold p-6'>
                <h1 className='sm:text-lg md:text-md lg:text-lg font-semibold pb-3'>Популярные статьи</h1>
                <div className='pb-3'>
                    <h3 className='text-sm sm:text-sm md:text-md pb-2'>Как составить семантическое ядро?</h3>
                    <div
                        className='flex justify-between items-center font-light md:text-xs text-gray-500'>
                        <h3>07.05.2022 г.</h3>
                        <div className='flex items-center gap-1'>
                            <RemoveRedEyeOutlinedIcon className='w-3'/>
                            <span>191</span>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3 className='text-sm sm:text-sm md:text-md pb-2'>Как составить семантическое ядро?</h3>
                    <div
                        className='flex justify-between items-center font-light md:text-xs text-gray-500'>
                        <h3>07.05.2022 г.</h3>
                        <div className='flex items-center gap-1'>
                            <RemoveRedEyeOutlinedIcon className='w-3'/>
                            <span>191</span>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3 className='text-sm sm:text-sm md:text-md pb-2'>Как составить семантическое ядро?</h3>
                    <div
                        className='flex justify-between items-center font-light md:text-xs text-gray-500'>
                        <h3>07.05.2022 г.</h3>
                        <div className='flex items-center gap-1'>
                            <RemoveRedEyeOutlinedIcon className='w-3'/>
                            <span>191</span>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3 className='text-sm sm:text-sm md:text-md pb-2'>Как составить семантическое ядро?</h3>
                    <div
                        className='flex justify-between items-center font-light md:text-xs text-gray-500'>
                        <h3>07.05.2022 г.</h3>
                        <div className='flex items-center gap-1'>
                            <RemoveRedEyeOutlinedIcon className='w-3'/>
                            <span>191</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 mt-6 bg-white rounded-md shadow-md text-center border-t">
                <h2 className="sm:text-lg md:text-md lg:text-lg font-semibold text-gray-800 mb-2">Подписаться на
                    рассылку</h2>
                <p className="sm:text-md md:text-sm lg:text-md text-gray-600 mb-4">
                    Подпишитесь на рассылку и получайте последние новости и акции на вашу почту
                </p>
                <form className="h-12 md:h-10 flex items-center border rounded-lg overflow-hidden">
                    <input
                        type="email"
                        placeholder="Введите email"
                        className="text-base sm:text-md text-gray-600 focus:outline-none pl-2 py-1"
                    />
                </form>
            </div>
            <div className="p-6 mt-6 bg-white rounded-md shadow-md border-t">
                <h1 className="text-xl md:text-md lg:text-lg font-semibold">Последние статьи</h1>
                <div className="pt-4">
                    <Image width={100} height={100} src={'/assets/img/img.png'} className="rounded-md pt-5 w-full"
                           alt="photo"/>
                    <div className='flex justify-between items-center pt-3 gap-1 font-light md:text-xs lg:text-sm text-gray-500'>
                        <span>05.12.2022 г.</span>
                        <div className='flex justify-center items-center'>
                            <RemoveRedEyeOutlinedIcon className='w-4'/>
                            <span>191</span>
                        </div>
                    </div>
                    <h3 className="sm:text-lg md:text-sm font-semibold">Как составить семантическое ядро?</h3>
                </div>
                <div className="pt-4">
                    <Image width={100} height={100} src={'/assets/img/img.png'} className="rounded-md pt-5 w-full"
                           alt="photo"/>
                    <div className='flex justify-between items-center pt-3 gap-1 font-light md:text-xs lg:text-sm text-gray-500'>
                        <span>05.12.2022 г.</span>
                        <div className='flex justify-center items-center'>
                            <RemoveRedEyeOutlinedIcon className='w-4'/>
                            <span>191</span>
                        </div>
                    </div>
                    <h3 className="sm:text-lg md:text-sm font-semibold">Как составить семантическое ядро?</h3>
                </div>
                <div className="pt-4">
                    <Image width={100} height={100} src={'/assets/img/img.png'} className="rounded-md pt-5 w-full"
                           alt="photo"/>
                    <div className='flex justify-between items-center pt-3 gap-1 font-light md:text-xs lg:text-sm text-gray-500'>
                        <span>05.12.2022 г.</span>
                        <div className='flex justify-center items-center'>
                            <RemoveRedEyeOutlinedIcon className='w-4'/>
                            <span>191</span>
                        </div>
                    </div>
                    <h3 className="sm:text-lg md:text-sm font-semibold">Как составить семантическое ядро?</h3>
                </div>
            </div>
        </aside>
    );
}

export default rightSide;