import CardItems from '@/components/card/CardItems'
import MainAppLayout from '@/components/layouts/MainAppLayout'
import { useAppSelector } from '@/components/redux/store'
import { fromLovelace } from '@/types/types';
import React from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { IoWalletOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { Table } from 'antd';

function Dashboard() {
    const { infoWallet } = useAppSelector(state => state.createWallet);
    return (
        <MainAppLayout>
            <main className='flex flex-col h-full'>
                <div>
                    <div className="w-full justify-between  box lg:flex items-center">
                        {/* <PageBreadcrumb breadcrumbItems={ROUTE_ACTION_APP} /> */}
                    </div>
                    <div className='py-1 w-full justify-between  box lg:flex items-center '>

                    </div>
                </div>
                <div className='flex-grow bg-white dark:bg-primary-dark space-y-4'>
                    <div className='w-full flex items-start justify-center p-2 '>
                        <CardItems
                            icon={<FaChartLine className='text-2xl text-white' />}
                            designation='Available command'
                            count={100}
                            categories='Command'
                            pourcentage='%100'
                            className='bg-teal-700 text-xl'
                            background='p-2 bg-teal-700 rounded opacity shadow shadow-sky-200 flex items-center justify-center'
                        />
                        <CardItems
                            icon={<MdOutlineDashboardCustomize className='text-2xl text-white' />}
                            designation='Nombres Actions'
                            count={100}
                            categories='Containers'
                            pourcentage='%100'
                            className='bg-cyan-700 text-xl'
                            background='p-2 bg-cyan-700 rounded opacity shadow shadow-sky-200 flex items-center justify-center'
                        />
                        <CardItems
                            icon={<MdOutlineDashboardCustomize className='text-2xl text-white' />}
                            designation='Nombres Publicité'
                            count={100}
                            categories='Containers'
                            pourcentage='%100'
                            className='bg-amber-950 text-xl'
                            background='p-2 bg-amber-950 rounded opacity shadow shadow-sky-200 flex items-center justify-center'
                        />
                        <CardItems
                            icon={<IoWalletOutline className='text-2xl text-white' />}
                            designation='Balance'
                            count={fromLovelace(infoWallet?.balance[0]?.quantity! ?? '0.0') as any ?? 0.0}
                            categories={infoWallet?.network == 1 ? "Mainnet" : "Preprod"}
                            pourcentage='%100'
                            className='bg-red-600 text-xl'
                            background='p-2 bg-red-500 rounded opacity shadow shadow-sky-200 flex items-center justify-center'
                        />
                    </div>
                    <div className=' p-4'>
                        <Table
                            // loading={status.isLoading}
                            bordered={false}
                            // dataSource={GET_PRODUCT?.data}
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

                                },
                                {
                                    title: "Designation",
                                    dataIndex: "designation",
                                    key: "designation",
                                    ellipsis: true,
                                    // filteredValue: [filter!],
                                    // onFilter: (v: any, r) => {
                                    //     return (r.designation?.toLowerCase()?.includes(v?.toLowerCase()))
                                    // },

                                },
                                {
                                    title: "Categories",
                                    dataIndex: "categories",
                                    key: "categories",
                                    ellipsis: true,
                                    responsive: ['lg'],
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

                                },
                                {
                                    title: "Alert quantity",
                                    dataIndex: "qteAlerte",
                                    key: "qteAlerte",
                                    ellipsis: true,
                                    responsive: ['lg'],

                                },
                                {
                                    title: "createdAt",
                                    dataIndex: "createdAt",
                                    key: "createdAt",
                                    align: "center",
                                    ellipsis: true,
                                    responsive: ['lg'],
                                },
                                {
                                    title: "Action",
                                    dataIndex: "createdAt",
                                    key: "createdAt",
                                    align: "center",
                                    ellipsis: true,
                                    // render: (e, _) => {
                                    //     return <div className='flex items-center justify-center space-x-3'>
                                    //         <button onClick={() => {
                                    //             dispatch(setProductsUpdate(_));
                                    //             dispatch(showModal('show-update-products'))
                                    //         }} className='bg-[#006064] p-1 rounded-lg w-8 h-8 shadow-2xl shadow-slate-700 border flex items-center justify-center text-white'><GrUpdate />
                                    //         </button>
                                    //         <button onClick={() => {
                                    //             dispatch(showModal('show-add-gallery'))
                                    //         }} className='bg-gray-200 text-black p-1 rounded-lg w-8 h-8 shadow-2xl shadow-slate-700 border flex items-center justify-center'><IoCloudUploadOutline />
                                    //         </button>


                                    //         <PopConfirm
                                    //             okButtonProps={{ loading: status_delete.isLoading, style: { backgroundColor: "#ef4444" } }}
                                    //             onCancel={() => setOpen(false)}
                                    //             open={(_.id === currentId) ? open : false}
                                    //             onConfirm={() => dispatch(deleteproduct(_))}
                                    //             placement='left'
                                    //             title='Notifications'
                                    //             description="Souhaitez-vous effacer cette unité d'enseignement ?"
                                    //             children={
                                    //                 <button onClick={() => {
                                    //                     setCurrentId(_.id!)
                                    //                     setOpen(prev => !prev)
                                    //                 }} className='bg-red-700 p-1 rounded-lg w-8 h-8 shadow-2xl shadow-red-700 border flex items-center justify-center text-white'><FaDeleteLeft />
                                    //                 </button>
                                    //             }

                                    //         />



                                    //     </div>
                                    // }
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
                                            className='p-2  !text-black  dark:!text-slate-300 !bg-white font-bold dark:!bg-slate-700'
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
                                            className='text-black dark:!text-slate-300 dark:!bg-slate-700'
                                        >
                                            {children}
                                        </td>
                                    ),
                                },
                            }}
                        />
                    </div>

                </div>
            </main>
        </MainAppLayout>

    )
}

export default Dashboard
