import Profils from '@/components/custom/company/Profils';
import BuildTitle from '@/components/custom/company/Title';
import Update from '@/components/custom/company/Update';
import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import IconShadowWidget from '@/components/helpers/showicon';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import { LINK_SETTINGS } from '@/utils/linkNavigator';
import { Button, Form, Input, Table } from 'antd';
import React, { useState } from 'react'


function Company() {
    const [filter, setfilter] = useState<string | undefined>('');

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
                <div className='flex-grow  dark:bg-primary-dark relative bg-[#006064]'>
                    <div className=' w-full grid grid-cols-4 bg-transparent absolute bottom-0  bg-white -translate-y-24'>
                        <Profils />
                        <Update />
                    </div>
                </div>
            </main>
        </MainAppLayout>
    )
}

export default Company
