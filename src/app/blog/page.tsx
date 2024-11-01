import Paper from "@/components/Paper";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import {PaperItem} from "@/app/types";

const papers: PaperItem[] = [
    {
        paperId: '1',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/assets/img/img.png',
        paperDate: '10.10.2010'
    },
    {
        paperId: '2',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/assets/img/img.png',
        paperDate: '10.10.2010'
    },
    {
        paperId: '3',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/assets/img/img.png',
        paperDate: '10.10.2010'
    },
];

export default function Blog() {
    return (
        <>
            <div className='px-10 md:px-14'>
                <section className="heading h-32 flex flex-col justify-center">
                    <h3 className="text-md font-light">Главная страница -- Блог</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-3xl font-semibold">Блог</h1>
                </section>
                <section className="main-content">
                    <div className="flex flex-col justify-between md:flex-row">
                        <LeftSide/>
                        <Paper papers={papers}/>
                        <RightSide/>
                    </div>
                </section>
            </div>
        </>
    );
}
