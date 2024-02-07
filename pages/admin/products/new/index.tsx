import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import PopConfirm from '@/components/modal/pop-confirm/pop-confirm';
import { deleteproduct, serProductId, setProductsUpdate } from '@/components/redux/products/products.slices';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useAppDispatch from '@/hook/use-dispatch';
import useProducts from '@/hook/use-products';
import { LINK_PRODUCT } from '@/utils/linkNavigator';
import { Input, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';
import { IoCloudUploadOutline } from "react-icons/io5";

function NowProducts() {
    const [filter, setfilter] = useState<string | undefined>('');
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const { dispatch } = useAppDispatch();
    const { GET_PRODUCT, status, status_delete } = useProducts();

    return (
        <MainAppLayout >
            <main className='flex flex-col h-full'>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center">
                        <PageBreadcrumb breadcrumbItems={LINK_PRODUCT} />
                    </div>
                    <div className='py-1 w-full justify-between  box lg:flex items-center '>
                        <button style={{ backgroundColor: "#006064" }} className='text-white h-8 rounded font-medium px-2' onClick={() => dispatch(showModal('show-product'))}>New products</button>
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
                        dataSource={GET_PRODUCT?.data}
                        size="small"
                        showHeader={true}
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
                                width: 80,
                                render: (_, data, index) => index + 1

                            },
                            {
                                title: "Designation",
                                dataIndex: "designation",
                                key: "designation",
                                ellipsis: true,
                                filteredValue: [filter!],
                                onFilter: (v: any, r) => {
                                    return (r.designation?.toLowerCase()?.includes(v?.toLowerCase()))
                                },

                            },
                            {
                                title: "Categories",
                                dataIndex: "categories",
                                key: "categories",
                                ellipsis: true,
                                responsive: ['lg'],
                                render: (_, data, index) => data.category?.designation
                            },
                            {
                                title: "Units",
                                dataIndex: "units",
                                key: "units",
                                ellipsis: true,
                                responsive: ['lg'],
                            },
                            {
                                title: "Price",
                                key: "price",
                                ellipsis: true,
                                responsive: ['lg'],
                                render: (_, data) => `${data.price} ₳`

                            },
                            {
                                title: "Alert quantity",
                                dataIndex: "qteAlerte",
                                key: "qteAlerte",
                                ellipsis: true,
                                responsive: ['lg'],
                                render: (_, data) => data.qteAlerte

                            },
                            {
                                title: "createdAt",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                align: "center",
                                ellipsis: true,
                                responsive: ['lg'],
                                render: (_, data) => dayjs(data.createdAt).format('YYYY-MM-DD')
                            },
                            {
                                title: "Action",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                align: "center",
                                ellipsis: true,
                                render: (e, _) => {
                                    return <div className='flex items-center justify-center space-x-3'>
                                        <button onClick={() => {
                                            dispatch(setProductsUpdate(_));
                                            dispatch(showModal('show-update-products'))
                                        }} className='bg-[#006064] p-1 rounded-lg w-8 h-8 shadow-2xl shadow-slate-700 border flex items-center justify-center text-white'><GrUpdate />
                                        </button>
                                        <button onClick={() => {
                                            dispatch(serProductId(_))
                                            dispatch(showModal('show-add-gallery'))
                                        }} className='bg-gray-200 text-black p-1 rounded-lg w-8 h-8 shadow-2xl shadow-slate-700 border flex items-center justify-center'><IoCloudUploadOutline />
                                        </button>


                                        <PopConfirm
                                            okButtonProps={{ loading: status_delete.isLoading, style: { backgroundColor: "#ef4444" } }}
                                            onCancel={() => setOpen(false)}
                                            open={(_.id === currentId) ? open : false}
                                            onConfirm={() => dispatch(deleteproduct(_))}
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

export default NowProducts
