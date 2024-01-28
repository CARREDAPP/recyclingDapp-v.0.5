import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import PopConfirm from '@/components/modal/pop-confirm/pop-confirm';
import { deleteCategories, setCategoryUpdate } from '@/components/redux/category/category.slices';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useCategory from '@/hook/use-category';
import useAppDispatch from '@/hook/use-dispatch';
import { LINK_PRODUCT } from '@/utils/linkNavigator';
import { Input, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { FaDeleteLeft, FaRegCreditCard } from 'react-icons/fa6';
import { GrUpdate } from "react-icons/gr";
import MainAppLayout from '@/components/layouts/MainAppLayout'

function Category() {
    const [filter, setfilter] = useState<string | undefined>('');
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const { GET_CATEGORY, status, dispatch, status_delete, status_update } = useCategory();

    return (
        <MainAppLayout>
            <main>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center">
                        <PageBreadcrumb breadcrumbItems={LINK_PRODUCT} />
                    </div>
                    <div className='py-1 w-full justify-between  box lg:flex items-center '>
                        <button style={{ backgroundColor: "#006064" }} className='text-white h-8 rounded font-medium px-2' onClick={() => dispatch(showModal('show-category'))}>New Category</button>
                        <Input.Search
                            onChange={(e) => setfilter(e.target.value)}
                            onSearch={(v) => setfilter(v)}
                            className=" border-slate-200 focus:border focus:border-sky-100 py-2 text-12 w-full md:w-1/5"
                            placeholder="Rechercher par désignation..."
                        />
                    </div>
                </div>

                <div className='flex-grow bg-white dark:bg-primary-dark'>
                    <Table
                        loading={status.isLoading}
                        bordered={false}
                        size="small"
                        showHeader={true}
                        dataSource={GET_CATEGORY?.data}
                        sticky={true}
                        pagination={{ hideOnSinglePage: true, defaultPageSize: 25 }}
                        columns={[
                            {
                                title: "N°",
                                dataIndex: "id",
                                key: "id",
                                ellipsis: true,
                                align: "center",
                                filterMultiple: true,
                                responsive: ['lg'],
                                width: 70,
                                render: (_, items, index) => index + 1

                            },
                            {
                                title: "Designation",
                                dataIndex: "designation",
                                key: "designation",
                                ellipsis: true,


                            },
                            {
                                title: "Description",
                                dataIndex: "description",
                                key: "description",
                                ellipsis: true,
                                responsive: ['lg'],
                            },

                            {
                                title: "createdAt",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                ellipsis: true,
                                responsive: ['lg'],
                                align: 'center',
                                width: 150,
                                render: (_, items, index) => dayjs(items.createdAt).format('YYYY-MM-DD')
                            },
                            {
                                title: "Action",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                align: 'center',
                                ellipsis: true,
                                width: 100,
                                render: (e, _) => {
                                    return <div className='flex items-center justify-center space-x-3'>
                                        <button onClick={() => {
                                            dispatch(setCategoryUpdate(_));
                                            dispatch(showModal('show-update-category'))
                                        }} className='bg-[#006064] p-1 rounded-lg w-8 h-8 shadow-2xl shadow-slate-700 border flex items-center justify-center text-white'><GrUpdate />
                                        </button>

                                        <PopConfirm
                                            okButtonProps={{ loading: status_delete.isLoading, style: { backgroundColor: "#ef4444" } }}
                                            onCancel={() => setOpen(false)}
                                            open={(_.id === currentId) ? open : false}
                                            onConfirm={() => dispatch(deleteCategories(_))}
                                            placement='left'
                                            title='Notifications'
                                            description="Souhaitez-vous effacer cette unité d'enseignement ?"
                                            children={
                                                <button onClick={() => {
                                                    setCurrentId(_.id!)
                                                    setOpen(prev => !prev)
                                                }} className='bg-red-700 p-1 rounded-lg w-8 h-8 shadow-2xl shadow-red-700 border flex items-center justify-center text-white'><FaDeleteLeft />
                                                </button>
                                            }

                                        />



                                    </div>
                                }
                            },

                        ]}
                        components={{
                            header: {
                                cell: ({
                                    children,
                                    ...rest
                                }: {
                                    children: React.ReactNode;
                                }) => (
                                    <td
                                        {...rest}
                                        className='p-2  !text-black  dark:!text-slate-300 !bg-white   font-bold dark:!bg-primary-dark'
                                    >
                                        {children}
                                    </td>
                                ),
                            },
                            body: {
                                cell: ({
                                    children,
                                    ...rest
                                }: {
                                    children: React.ReactNode;
                                }) => (
                                    <td
                                        {...rest}
                                        className='text-black dark:!text-slate-300 dark:!bg-primary-dark'
                                    >
                                        {children}
                                    </td>
                                ),
                            },
                        }}
                    />
                </div>
            </main>
        </MainAppLayout>
    )
}

export default Category
