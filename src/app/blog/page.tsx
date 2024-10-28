import Paper from "@/components/Paper";
import RightSide from "@/components/RightSide";

export default function Blog() {
    return <>
        <section className="heading h-28 flex flex-col justify-center">
            <h3 className='text-sm'>Главная страница >> Блог</h3>
            <h1 className='text-4xl'>Блог</h1>
        </section>
        <section className="main-content w-full flex flex-row justify-between">
            <aside className='flex flex-col'>
                <div>
                    <div className='flex flex-col justify-center pl-6 w-60 h-[130px] shadow-md border-t-[0.5px]'>
                        <span className='font-bold text-xl pb-5'>Категории</span>
                        <span className='text-sm'>SEO продвижение</span>
                    </div>
                </div>
            </aside>
            <Paper/>
            <aside><RightSide/></aside>
        </section>
    </>
}
