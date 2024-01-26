import IconShadowWidget from '@/components/helpers/showicon'
import React from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaArrowUpLong } from "react-icons/fa6";
interface IElementCard {
    designation?: string;
    count?: number;

}

function CardItems({ count, designation }: IElementCard) {
    return (
        <div className='bg-white dark:bg-slate-700 h-24 w-1/3 shadow shadow-slate-50 dark:shadow-transparent rounded pl-2 py-2 flex flex-col justify-between m-2'>
            <div className='flex justify-between h-14 space-x-2'>
                <div className='bg-sky-700 p-0.5 rounded-full h-full'></div>
                <div className='w-56'>
                    <div className='flex items-center justify-between p-1 leading-none '>
                        <span className='font-normal text-gray-400'>{designation}</span>
                        <div className='p-1 bg-sky-200 rounded opacity shadow shadow-sky-200  '>
                            <IconShadowWidget
                                shadowColor=''
                                icon={{
                                    icon: <MdOutlineDashboardCustomize className='text-sky-700 text-[20px] ' />,
                                    size: 20
                                }}
                                showShadow
                            />
                        </div>
                    </div>
                    <h1 className='text-xl font-bold'>{count}</h1>
                </div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
                <div className='flex text-[12px] text-green-500'>
                    <FaArrowUpLong />
                    <span>+6.5%</span>
                </div>
                <span className='text-[12px] text-gray-400 font-semibold'>Since last week</span>
            </div>
        </div>
    )
}

export default CardItems
