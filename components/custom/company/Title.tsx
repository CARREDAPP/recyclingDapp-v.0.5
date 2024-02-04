import IconShadowWidget from '@/components/helpers/showicon'
import React from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
interface ITitle {
    icon: React.ReactNode,
    size: number,
    label: string
    title: string,
    className?: string
}
function BuildTitle({ className, icon, label, size, title }: ITitle) {
    return (
        <div className='flex items-center space-x-2 w-full p-2'>
            <div className={className}>
                <IconShadowWidget
                    shadowColor=''
                    icon={{
                        icon: icon ?? <MdOutlineDashboardCustomize className='text-white text-[20px] ' />,
                        size: size ?? 20
                    }}
                    showShadow
                />
            </div>
            <div className='flex flex-col justify-start'>
                <span className='text-gray-500'>{label}</span>
                <span className='font-bold overflow-hidden text-gray-700'>{title}</span>
            </div>
        </div>
    )
}

export default BuildTitle
