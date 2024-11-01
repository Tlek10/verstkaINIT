import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import {PaperItem} from "@/app/types";

interface PaperProps {
    papers: PaperItem[];
}

const Paper: React.FC<PaperProps> = ({papers}) => {
    return (
        <div>
            {papers.map((paper) => (
                <div key={paper.paperId}
                     className='md:w-11/12 lg:w-[26rem] lg:mx-5 xl:w-[34rem] rounded-md shadow-md border-t-[0.5px] flex flex-col mb-6 transition-transform duration-300 ease-in-out'>
                    <div className='p-6 flex flex-col'>
                        <div className='flex flex-row pb-3 gap-3 text-sm md:text-xs font-light'>
                            <h3 className='text-red-500'>#{paper.paperCategory}</h3>
                            <h3 className='text-gray-500'>{paper.paperDate} г.</h3>
                        </div>
                        <h1 className='font-bold text-2xl sm:text-4xl md:text-lg lg:text-xl pb-3'>{paper.paperName}</h1>
                        <span className='text-lg sm:text-md md:text-sm'>{paper.paperDescription}</span>
                    </div>
                    <div className='relative h-64'>
                        <Image
                            src={paper.paperImg}
                            alt={paper.paperName}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="p-3 flex justify-between items-center text-gray-500 text-md md:text-xs">
                        <div className='flex items-center gap-3 md:gap-2'>
                            <div className='flex flex-row items-center gap-1'>
                                <RemoveRedEyeOutlinedIcon className='w-4'/>
                                <span>400</span>
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                                <ForumOutlinedIcon className='w-4'/>
                                <span>0</span>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2 md:gap-1'>
                            <KeyboardArrowDownOutlinedIcon className='w-5'/>
                            <span className='text-green-400'>2</span>
                            <KeyboardArrowUpOutlinedIcon className='w-5'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
        ;
}

export default Paper;
