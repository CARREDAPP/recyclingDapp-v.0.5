import React from 'react'
import BuildTitle from './Title'
import { FiHome } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import { BiPhone } from 'react-icons/bi';
import { GoLocation } from "react-icons/go";
import { FaWallet } from "react-icons/fa6";
import { BsPinMapFill } from "react-icons/bs";

function Profils() {
    return (
        <main>
            <div className='bg-white shadow-md h-full p-4 flex justify-start items-center -translate-y-20 mx-9 flex-col rounded'>
                {/* <div className='bg-yellow-900 shadow-2xl w-32 h-32 rounded-full'>
                            </div> */}
                <BuildTitle
                    icon={<FiHome className='text-white' />}
                    label='Company name'
                    size={22}
                    title='Uni-market'
                    className='bg-orange-700 opacity-80 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<LuMailPlus className='text-white' />}
                    label='Mail address'
                    size={22}
                    title='gentilakili98@gmail.com'
                    className='bg-sky-700 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<BiPhone className='text-white' />}
                    label='Phone number'
                    size={22}
                    title='+243 977748166'
                    className='bg-sky-900 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<GoLocation className='text-white' />}
                    label='Location'
                    size={22}
                    title='Democratic Republic of the Congo'
                    className='bg-teal-700 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<BsPinMapFill className='text-white' />}
                    label='Longitude'
                    size={22}
                    title='10477'
                    className='bg-orange-950 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<BsPinMapFill className='text-white' />}
                    label='Latitude'
                    size={22}
                    title='10477'
                    className='bg-lime-800 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
                <BuildTitle
                    icon={<FaWallet className='text-white flex items-center justify-center' />}
                    label='Digital adress'
                    size={22}
                    title='10477'
                    className='bg-red-900 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
                />
            </div>
        </main>
    )
}

export default Profils
