import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useAppDispatch from '@/hook/use-dispatch';
import useUser from '@/hook/use-user';
import { LINK_SETTINGS } from '@/utils/linkNavigator';
import { Input, List, Table } from 'antd';
import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import { FaUnlock, FaLock } from "react-icons/fa";
import PopConfirm from '@/components/modal/pop-confirm/pop-confirm';
import { blockuser, deleteuser, setUserUpdate } from '@/components/redux/user/user.slice';
import { GrUpdate } from "react-icons/gr";
import MainAppLayout from '@/components/layouts/MainAppLayout';

function Users() {
    const [filter, setfilter] = useState<string | undefined>('');
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const { dispatch } = useAppDispatch()
    const { GET_USER, status, status_delete, status_block } = useUser();
    const filteredData = GET_USER?.data?.filter((item) =>
        item.fullname.toLowerCase().includes(filter?.toLowerCase()!)
        || item.username?.includes(filter!.toLowerCase()!)
    );
    return (
        <MainAppLayout >
            <main className='flex flex-col h-full'>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center ">
                        <PageBreadcrumb breadcrumbItems={LINK_SETTINGS} />
                    </div>
                    <div className='py-1 w-full justify-between  box lg:flex items-center '>
                        <button style={{ backgroundColor: "#006064" }} className='text-white h-8 rounded font-medium px-2' onClick={() => dispatch(showModal('show-user'))}>New user</button>
                        <Input.Search
                            onChange={(e) => setfilter(e.target.value)}
                            onSearch={(v) => setfilter(v)}
                            className=" border-slate-200 focus:border focus:border-sky-100 py-2 text-12 w-full md:w-1/5"
                            placeholder="Rechercher par désignation..."
                        />
                    </div>
                </div>
                <div className='flex-grow bg-white dark:bg-primary-dark '>
                    <List
                        loading={status.isLoading}
                        dataSource={filteredData}
                        pagination={{ defaultPageSize: 15, hideOnSinglePage: true }}
                        bordered={false}
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 1,
                            md: 2,
                            lg: 2,
                            xl: 6,
                            xxl: 4,
                        }}
                        itemLayout="vertical"
                        size="default"
                        renderItem={(items) => {
                            return <List.Item className='w-full rounded'>
                                <section className=' border border-gray-200 dark:border-gray-600 flex p-2 scale-95 hover:scale-100 duration-500 space-x-2 items-center justify-between rounded'>
                                    <div className='flex items-center space-x-2'>
                                        <div className='rounded w-14 h-14'>
                                            <Image className='bg-cover rounded' width={900} height={900} alt='' src={'/images/avatar.jpg'} />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <span className='text-black dark:text-white font-bold text-[14px] align-text-bottom'>{items.fullname.toUpperCase()}</span>
                                            <span className='text-gray-600 dark:text-gray-200 text-[15px]'>{items.username.toLowerCase()}</span>
                                            <div className='flex items-center  space-x-2 justify-between'>
                                                <h1 className='text-[12px] text-gray-400 overflow-hidden '>{formatDistanceToNow(new Date(items?.createdAt!), { addSuffix: true, locale: fr })}</h1>
                                                <h1 className='text-[12px] text-red-400 overflow-hidden'>{formatDistanceToNow(new Date(items?.updatedAt!), { addSuffix: true, locale: fr })}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-2 flex flex-col'>
                                        <button onClick={() => {
                                            dispatch(setUserUpdate(items))
                                            dispatch(showModal('show-user-update'))

                                        }} className={`bg-gray-200 text-black p-0.5 rounded flex items-center px-2 space-x-2`}>
                                            <GrUpdate />
                                            <span>Update</span>
                                        </button>
                                        <PopConfirm
                                            okButtonProps={{ loading: status_block.isLoading, style: { backgroundColor: "#ef4444" } }}
                                            onCancel={() => setOpen(false)}
                                            open={(items.id === currentId) ? open : false}
                                            onConfirm={() => dispatch(blockuser(items))}
                                            placement='right'
                                            title='Notifications'
                                            description={`${items.is_actve ? "Would you like to block this user?" : "Would you like to unblock this user?"}`}
                                            children={
                                                <button onClick={() => {
                                                    setCurrentId(items.id!)
                                                    setOpen(prev => !prev)

                                                }} className={`${items.is_actve ? 'bg-[#006064]' : 'bg-[#8b2f18]'} text-white p-0.5 rounded flex items-center px-2 space-x-2`}>
                                                    {items.is_actve ? <FaUnlock /> : <FaLock />}
                                                    {items.is_actve ? <span>Block</span> : <span>Unblock</span>}
                                                </button>

                                            }
                                        />
                                    </div>

                                </section>
                            </List.Item>
                        }}
                    />
                </div>
            </main>
        </MainAppLayout>
    )
}

export default Users
