import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import { LINK_SETTINGS } from '@/utils/linkNavigator';
import { Input, Table } from 'antd';
import React, { useState } from 'react'

function Payment() {
    const [filter, setfilter] = useState<string | undefined>('');

    return (
        <main>
            <div>
                <div className="w-full justify-between  box lg:flex items-center">
                    <PageBreadcrumb breadcrumbItems={LINK_SETTINGS} />
                </div>
                <div className='py-1 w-full justify-between  box lg:flex items-center '>
                    <button style={{ backgroundColor: "#006064" }} className='text-white h-8 rounded font-medium px-2' onClick={() => null}>Export</button>
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
                    loading={false}
                    bordered={false}
                    size="small"
                    showHeader={true}
                    sticky={true}
                    pagination={{ hideOnSinglePage: true, defaultPageSize: 25 }}
                    columns={[
                        {
                            title: "Identifier",
                            dataIndex: "id",
                            key: "id",
                            ellipsis: true,
                            align: "center",
                            filterMultiple: true,
                            responsive: ['lg'],

                        },
                        {
                            title: "Designation",
                            dataIndex: "designation",
                            ellipsis: true,

                        },
                        {
                            title: "Categories",
                            dataIndex: "categories",
                            key: "categories",
                            ellipsis: true,
                            responsive: ['lg'],
                        },
                        {
                            title: "Forme",
                            dataIndex: "forme",
                            key: "forme",
                            ellipsis: true,
                            responsive: ['lg'],
                        },
                        {
                            title: "Qte alerte",
                            dataIndex: "qte",
                            key: "qte",
                            ellipsis: true,
                            responsive: ['lg'],

                        },
                        {
                            title: "Prix gros",
                            dataIndex: "pugros",
                            key: "pugros",
                            ellipsis: true,
                        },
                        {
                            title: "Prix détail",
                            dataIndex: "pudetail",
                            key: "pudetail",
                            width: "10%",
                            ellipsis: true,
                        },
                        {
                            title: "is-Expire",
                            dataIndex: "createdAt",
                            key: "createdAt",
                            ellipsis: true,
                        },

                        {
                            title: "createdAt",
                            dataIndex: "createdAt",
                            key: "createdAt",
                            ellipsis: true,
                            responsive: ['lg'],
                        },
                        {
                            title: "",
                            dataIndex: "createdAt",
                            key: "createdAt",
                            ellipsis: true,
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

export default Payment
