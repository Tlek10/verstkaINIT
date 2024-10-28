import React from 'react';
import Paper from "@/components/Paper";

export default function Blog() {
    return (
        <div className='w-full p-10 flex flex-row justify-between'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='text-[40px] font-bold'>Блог</h1>
                    <div className='flex flex-col justify-center pl-6 w-[230px] h-[130px] shadow-md'>
                        <span className='font-bold text-xl pb-5'>Категории</span>
                        <span className='text-sm'>SEO продвижение</span>
                    </div>
                </div>
            </div>
            <Paper/>
            <div>

            </div>
        </div>
    );
}
