import PageBreadcrumb from '@/components/global/PageBreadcrumb';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useCategory from '@/hook/use-category';
import useAppDispatch from '@/hook/use-dispatch';
import { LINK_PRODUCT } from '@/utils/linkNavigator';
import { Input, Table } from 'antd';
import React, { useState } from 'react'

function Category() {
    const [filter, setfilter] = useState<string | undefined>('');
    const { GET_CATEGORY, status, dispatch } = useCategory();

    return (
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
                        },
                        {
                            title: "Action",
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

export default Category
