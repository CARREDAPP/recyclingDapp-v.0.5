
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import IconShadowWidget from '../helpers/showicon';

interface IElementCard {
    designation?: string;
    count?: number;
    className?: string;
    categories?: string;
    pourcentage?: string;
    background?: string;
    icon: React.ReactNode
}

function CardItems({ count, designation, className, categories, pourcentage, background, icon }: IElementCard) {
    return (
        <div className='bg-white dark:bg-slate-700 h-24 w-1/3 shadow shadow-slate-200 dark:shadow-slate-700 rounded pl-2 py-2 flex flex-col justify-between m-2 border-l-sky-900'>
            <div className='flex justify-between h-14 space-x-2'>
                <div className='bg-red-500 p-0.5 rounded-full h-full'></div>
                <div className='w-56'>
                    <div className='flex items-center justify-between p-1 leading-none '>
                        <span className='font-normal text-gray-400'>{designation}</span>
                        <div className={background}>
                            <IconShadowWidget
                                shadowColor='bg-green-500'
                                icon={{
                                    icon: icon,
                                    size: 20,

                                }}
                                showShadow={true}
                            />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>{count}</h1>
                </div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
                <div className='flex text-[12px] text-green-500'>
                    <FaArrowUpLong />
                    <span className='text-[16px]'>{pourcentage ?? "+6.5%"}</span>
                </div>
                <span className='text-[14px] text-gray-400 font-semibold'>{categories}</span>
            </div>
        </div>
    )
}

export default CardItems
