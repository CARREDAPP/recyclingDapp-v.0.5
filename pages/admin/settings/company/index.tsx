import Profils from '@/components/custom/company/Profils';
import BuildTitle from '@/components/custom/company/Title';
import Update from '@/components/custom/company/Update';
import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import IconShadowWidget from '@/components/helpers/showicon';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import useCompany from '@/hook/use-company';
import { LINK_SETTINGS } from '@/utils/linkNavigator';
import { Button, Form, Input, Table, Spin } from 'antd';
import React, { useState } from 'react'
import { PiCameraDuotone } from "react-icons/pi";


function Company() {
    const [filter, setfilter] = useState<string | undefined>('');
    const { GET_COMPANY, dispatch, status } = useCompany();
    return (
        <MainAppLayout >
            <main className='flex flex-col h-full '>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center">
                        <PageBreadcrumb breadcrumbItems={LINK_SETTINGS} />
                    </div>
                    <div className='py-2 w-full justify-between  box lg:flex items-center '>
                    </div>
                </div>
                <div className='flex-grow  dark:bg-primary-dark relative bg-[#006064] py-3'>
                    <button className='absolute right-2 p-3 border flex items-center text-white space-x-2 rounded-lg font-bold'>
                        <PiCameraDuotone className='text-xl' />
                        <span>Change covor</span>
                    </button>
                    <div className='w-full grid grid-cols-4 bg-transparent absolute bottom-0  bg-white '>
                        <Profils data={GET_COMPANY?.data!} msg='' />
                        <Update data={GET_COMPANY?.data!} msg='' />
                    </div>
                </div>
            </main>
        </MainAppLayout>
    )
}

export default Company
