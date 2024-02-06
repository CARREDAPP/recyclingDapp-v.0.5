import React from 'react'
import BuildTitle from './Title'
import { FiHome } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import { BiPhone } from 'react-icons/bi';
import { GoLocation } from "react-icons/go";
import { FaWallet } from "react-icons/fa6";
import { BsPinMapFill } from "react-icons/bs";
import { IGETEntreprise } from '@/types';
import { subString } from '@/utils/convertir';
import { SiWalletconnect } from "react-icons/si";


function Profils(profils: IGETEntreprise) {
    return (
        <main className='bg-white shadow-md h-full p-4 flex justify-start items-center -translate-y-24 mx-9 flex-col rounded'>
            <BuildTitle
                icon={<FiHome className='text-white' />}
                label='Company name'
                size={22}
                title={profils?.data?.companyName}
                className='bg-orange-700 opacity-80 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<LuMailPlus className='text-white' />}
                label='Mail address'
                size={22}
                title={profils?.data?.mailCompany}
                className='bg-sky-700 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<BiPhone className='text-white' />}
                label='Phone number'
                size={22}
                title={profils?.data?.phone}
                className='bg-sky-900 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<GoLocation className='text-white' />}
                label='Location'
                size={22}
                title={profils?.data?.nationalite}
                className='bg-teal-700 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<BsPinMapFill className='text-white' />}
                label='Longitude'
                size={22}
                title={profils?.data?.longitute}
                className='bg-orange-950 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<BsPinMapFill className='text-white' />}
                label='Latitude'
                size={22}
                title={profils?.data?.latitude}
                className='bg-lime-800 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
            <BuildTitle
                icon={<SiWalletconnect className='text-white flex items-center justify-center' />}
                label='Digital adress'
                size={22}
                title={subString(profils?.data?.digitalAdress)}
                className='bg-red-900 p-1 flex items-center justify-center flex-col  rounded-md text-xl'
            />
        </main>
    )
}

export default Profils
