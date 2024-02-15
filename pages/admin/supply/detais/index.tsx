import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import PopConfirm from '@/components/modal/pop-confirm/pop-confirm';
import useAppDispatch from '@/hook/use-dispatch';
import useSupply from '@/hook/use-supply';
import { LINK_SUPPLY } from '@/utils/linkNavigator';
import { Input, Table, Tag } from 'antd';
import React, { useState } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6';
import { CiMenuKebab } from "react-icons/ci";

function DetaislSupply() {
    const [filter, setfilter] = useState<string | undefined>('');
    const { dispatch } = useAppDispatch();
    const { is_status, GET_SUPPLY } = useSupply();
    return (
        <main className='flex flex-col h-full'>
            <div>
                <div className="w-full justify-between  box lg:flex items-center">
                    <PageBreadcrumb breadcrumbItems={LINK_SUPPLY} />
                </div>
                <div className='py-1 w-full justify-between  box lg:flex items-center '>
                    <div></div>
                    <Input.Search
                        onChange={(e) => setfilter(e.target.value)}
                        onSearch={(v) => setfilter(v)}
                        className=" border-slate-200 focus:border focus:border-sky-100 p-2 text-12 w-full md:w-1/5"
                        placeholder="Rechercher par désignation..."
                    />
                </div>
            </div>
            <div className='flex-grow bg-white dark:bg-primary-dark '>
                <Table
                    loading={is_status.isLoading}
                    bordered={false}
                    size="small"
                    showHeader={true}
                    sticky={true}
                    dataSource={GET_SUPPLY?.data}
                    pagination={{ hideOnSinglePage: true, defaultPageSize: 25 }}
                    columns={[
                        {
                            title: "N°",
                            dataIndex: "id",
                            key: "id",
                            ellipsis: true,
                            align: "center",
                            filterMultiple: true,
                            width: 80,
                            responsive: ['lg'],
                            render: (_, element, index) => index + 1
                        },
                        {
                            title: "Designation",
                            key: "designation",
                            ellipsis: true,
                            filteredValue: [filter!],
                            render: (_, element, index) => element?.product?.designation,
                            onFilter: (v: any, r) => {
                                return (r.product?.designation.toLowerCase()?.includes(v?.toLowerCase()))
                            },

                        },
                        {
                            title: "Units",
                            key: "units",
                            ellipsis: true,
                            responsive: ['lg'],
                            render: (_, data) => <Tag color='blue'>{data.product.units}</Tag>
                        },
                        {
                            title: "Catégories",
                            dataIndex: "categories",
                            key: "categories",
                            ellipsis: true,
                            responsive: ['lg'],
                            render: (_, data) => data.product.category?.designation
                        },
                        {
                            title: "Quantity",
                            key: "units",
                            ellipsis: true,
                            responsive: ['lg'],
                            render: (_, data) => data?.quantity
                        },
                        {
                            title: "Price",
                            key: "price",
                            ellipsis: true,
                            responsive: ['lg'],
                            render: (_, data) => data?.price + " ₳"
                        },
                        {
                            title: "createdAt",
                            key: "createdAt",
                            align: "center",
                            ellipsis: true,
                            responsive: ['lg'],
                            render: (_, data) => data.createdAt!.slice(0, 10)
                        },

                        {
                            title: "Action",
                            dataIndex: "createdAt",
                            key: "createdAt",
                            ellipsis: true,
                            align: "center",
                            render: (e, _) => {
                                return <div className='flex items-center justify-center space-x-3'>
                                    <PopConfirm
                                        okButtonProps={{ loading: true, style: { backgroundColor: "#ef4444" } }}
                                        onCancel={() => null}
                                        open={false}
                                        onConfirm={() => null}
                                        placement='left'
                                        title='Notifications'
                                        description="Souhaitez-vous effacer cette unité d'enseignement ?"
                                        children={
                                            <button onClick={() => {
                                                // setCurrentId(_.id!)
                                                // setOpen(prev => !prev)
                                            }} className='bg-[#006064] p-1 rounded-lg w-8 h-8 shadow-2xl shadow-red-700 border flex items-center justify-center text-white'><CiMenuKebab />
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
    )
}

export default DetaislSupply
