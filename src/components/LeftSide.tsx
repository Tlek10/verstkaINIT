import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const LeftSide = () => {
    return (
        <aside className="md:hidden md:order-none md:my-0 my-5 order-last lg:flex lg:w-52 lg:h-28 xl:w-56 xl:h-32 sticky top-12 border-t-[0.5px] shadow-md rounded-md">
            <div className='w-full flex flex-col justify-center p-6'>
                <span className='font-bold text-lg md:text-lg lg:text-xl pb-4'>Категории</span>
                <div className='flex justify-between items-center'>
                    <span className='text-xs lg:text-sm'>SEO продвижение</span>
                    <ArrowForwardIosOutlinedIcon className='text-sm'/>
                </div>
            </div>
        </aside>
    );
}

export default LeftSide;
