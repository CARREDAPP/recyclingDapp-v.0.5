import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import { LINK_RAPPORT } from '@/utils/linkNavigator';
import { Input, Table } from 'antd';
import React, { useState } from 'react'

function History() {
    const [filter, setfilter] = useState<string | undefined>('');

    return (
        <MainAppLayout >

            <main>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center">
                        <PageBreadcrumb breadcrumbItems={LINK_RAPPORT} />
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
                                title: "N°",
                                dataIndex: "id",
                                key: "id",
                                ellipsis: true,
                                align: "center",
                                filterMultiple: true,
                                responsive: ['lg'],
                                width: "5%",
                                // render: (_, data) => <span className="text-[13px]">{data?.id}</span>

                            },
                            {
                                title: "Désignation",
                                dataIndex: "designation",
                                key: "designation",
                                width: "30%",
                                ellipsis: true,
                                // filteredValue: [filter!],
                                // onFilter: (v: any, r) => {
                                //     return (r.designation?.toLowerCase()?.includes(v?.toLowerCase()))
                                // },

                            },
                            {
                                title: "Catégories",
                                dataIndex: "categories",
                                key: "categories",
                                width: "15%",
                                ellipsis: true,
                                responsive: ['lg'],
                                // render: (_, data) => <span className="text-[13px]">{data?.categoryproduit?.designation}</span>
                            },
                            {
                                title: "Forme",
                                dataIndex: "forme",
                                key: "forme",
                                width: "10%",
                                ellipsis: true,
                                responsive: ['lg'],
                                // render: (_, data) => <span className="text-[13px]">{data.forme}</span>
                            },
                            {
                                title: "Qte alerte",
                                dataIndex: "qte",
                                key: "qte",
                                width: "8%",
                                ellipsis: true,
                                responsive: ['lg'],
                                // render: (_, data) => {
                                //     const value = data.stocks.map(i => i.qteDepot);
                                //     let alerte = data.qteAlerte >= value[0]
                                //     return <Tag color={`${alerte ? `red` : "success"}`} className="h-3 w-3 rounded-full"></Tag>
                                // }
                            },
                            {
                                title: "Prix gros",
                                dataIndex: "pugros",
                                key: "pugros",
                                width: "10%",
                                ellipsis: true,
                                // render: (_, data) => <span className="text-[13px]">{data.pugros}</span>
                            },
                            {
                                title: "Prix détail",
                                dataIndex: "pudetail",
                                key: "pudetail",
                                width: "10%",
                                ellipsis: true,
                                // render: (_, data) => <span className="text-[13px]">{data.pudetail}</span>
                            },
                            {
                                title: "is-Expire",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                width: "10%",
                                ellipsis: true,
                                // render: (_, data) => <Tag color="red" icon={<BiImageAdd />} className="text-[14px] flex items-center justify-center space-x-1 cursor-pointer w-24">Parcourir</Tag>
                            },

                            {
                                title: "createdAt",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                width: "10%",
                                ellipsis: true,
                                responsive: ['lg'],
                                // render: (_, data) => <span className="text-[13px]">{data.createdAt.slice(0, 10)}</span>
                            },
                            {
                                title: "",
                                dataIndex: "createdAt",
                                key: "createdAt",
                                width: "10%",
                                ellipsis: true,
                                // render: (_, data) => <Tag color="red" icon={<BiImageAdd />} className="text-[14px] flex items-center justify-center space-x-1 cursor-pointer w-24">Parcourir</Tag>
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

export default History
