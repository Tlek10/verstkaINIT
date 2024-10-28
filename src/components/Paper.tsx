import Image from 'next/image'
import defaultImg from '/src/public/img/img.png'
import { faEye, faComments, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Paper = {
    paperId: string,
    paperCategory: string,
    paperName: string,
    paperDescription: string,
    paperImg: string,
    paperDate: string,
}

const papers: Paper[] = [
    {
        paperId: '1',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/src/public/img/img.png',
        paperDate: '10.10.2010'
    },
    {
        paperId: '2',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/src/public/img/img.png',
        paperDate: '10.10.2010'
    },
    {
        paperId: '3',
        paperCategory: 'SEO продвижения',
        paperName: 'Как составить семантическое ядро?',
        paperDescription: 'Первым делом при SEO продвижении сайта обычно идёт составление семантического ядра. Вам нужно понять по каким запросам ищут ваши товары/услуги. Поставьте себя на место своих клиентов.',
        paperImg: '/src/public/img/img.png',
        paperDate: '10.10.2010'
    },
]


const Paper = () => {
    return (
        <div>
            {papers.map((paper) => (
                <div key={paper.paperId} className='w-[500px] h-[420px] rounded-md shadow-md flex flex-col'>
                    <div className='p-6 flex flex-col '>
                        <div className='flex flex-row pb-3'>
                            <h3 className='text-red-500 text-xs'>#{paper.paperCategory}</h3>
                            <h3 className='text-xs ml-3 text-gray-500'>{paper.paperDate} г.</h3>
                        </div>
                        <h1 className='font-bold text-2xl pb-3'>{paper.paperName}</h1>
                        <span className='text-sm '>{paper.paperDescription}</span>
                    </div>
                    <div className='relative w-full h-[250px]'>
                        <Image
                            src={defaultImg}
                            alt={paper.paperName}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="p-2 flex justify-between items-center text-gray-500">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faEye} className="mr-2" />191
                        </span>
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faComments} className="mr-2" />0
                        </span>
                        <span className="flex items-center text-green-500">
                            <FontAwesomeIcon icon={faArrowUp} className="mr-2" />3
                        </span>
                    </div>
                </div>
            ))
            }
        </div>

    );
}

export default Paper;