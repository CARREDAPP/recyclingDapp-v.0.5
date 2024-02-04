import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { useAppSelector } from '@/components/redux/store';
import { addPanier, cleanAll, postSupplyDetails, remove } from '@/components/redux/supply/supply.slice';
import useAppDispatch from '@/hook/use-dispatch'
import useProducts from '@/hook/use-products';
import { Button, Form, Input, InputNumber, Modal, Select, Table } from 'antd'
import React, { useRef, useState } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';
import { IoCloudUploadOutline } from 'react-icons/io5';
import PopConfirm from '../pop-confirm/pop-confirm';
import { setMonth } from 'date-fns';

function Supplies() {
    const [open, setOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [form] = Form.useForm();
    const { dispatch } = useAppDispatch();
    const { GET_PRODUCT, status } = useProducts();
    const { PANIER_ENTREE } = useAppSelector(state => state.createSupply);
    const handleSelectChange = (value: any, option: any) => {
        setSelectedLabel(option.label);
    };

    const onFinish = (e: any) => {
        const payload = {
            id: e.productId,
            designation: selectedLabel,
            quantity: e.quantity,
            price: e.price,
        }
        dispatch(addPanier(payload));
        form.resetFields();
    }
    return (
        <Modal
            width={670}
            centered
            onCancel={() => dispatch(showModal('close'))}
            closeIcon
            open={true}
            footer={[]}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                New supply
            </p>}
        >

            <main>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout='vertical'
                >
                    <div>
                        <Form.Item

                            className='w-full'
                            style={{ marginBottom: '6px' }}
                            label={'Designation'}
                            name={'productId'}
                            rules={[
                                {
                                    required: true,
                                    message: "Please select the designation"
                                },
                            ]}
                        >
                            <Select
                                onChange={handleSelectChange}
                                loading={status.isLoading}
                                className='w-full pr-1'
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label!.toLowerCase() ?? '').includes(input.toLowerCase())}
                                placeholder="Select the designation..."
                                allowClear
                                options={GET_PRODUCT?.data?.map((items) => (
                                    {
                                        value: items?.id,
                                        label: items?.designation
                                    }
                                ))} />
                        </Form.Item>

                        <div className='flex items-center space-x-4'>
                            <Form.Item
                                className='w-full'
                                style={{ marginBottom: '6px' }}
                                label={'Quantiy'}
                                name={'quantity'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter quantity',
                                    },
                                ]}
                            >
                                <InputNumber className='w-full' placeholder='Enter the quantity' />
                            </Form.Item>
                            <Form.Item
                                className='w-full'
                                style={{ marginBottom: '6px' }}
                                label={'Purchase price'}
                                name={'price'}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter the purchase price",
                                    },
                                ]}
                            >
                                <InputNumber className='w-full' placeholder='Enter the purchase price' />
                            </Form.Item>

                        </div>
                        <div className='flex items-center w-full'>
                            <Form.Item style={{ marginTop: '10px' }}>
                                <Button loading={false} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                                    Add to cart
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
                <div className={`${PANIER_ENTREE.length > 0 ? "" : "hidden"}`}>
                    <Table size='small'
                        pagination={{ hideOnSinglePage: true, defaultPageSize: 15 }}
                        bordered={false}
                        dataSource={PANIER_ENTREE}
                        columns={[
                            {
                                title: 'N°',
                                width: 50,
                                align: 'center',
                                render: (_, element, index) => index + 1
                            },
                            {
                                title: 'Designation',
                                render: (_, element) => element?.products?.designation?.toUpperCase()
                            },
                            {
                                title: 'Quantity',
                                width: 80,
                                align: 'center',
                                render: (_, element) => element?.quantity
                            },
                            {
                                title: 'Price',
                                width: 80,
                                align: 'center',
                                render: (_, element) => element?.price + " ₳"
                            },
                            {
                                title: 'Action',
                                width: 50,
                                render: (_, element, index) => {
                                    return <div className='flex items-center space-x-1 justify-center'>
                                        <button onClick={() => {
                                            dispatch(remove(element))
                                        }} className='bg-red-500  p-1 rounded-lg w-6 h-6 shadow-2xl shadow-slate-700 border flex items-center justify-center text-white'><FaDeleteLeft />
                                        </button>


                                    </div>
                                }
                            },
                        ]}
                    />
                    <div className='flex items-center w-full space-x-4 py-2'>
                        <Button onClick={() => dispatch(postSupplyDetails(PANIER_ENTREE))} loading={false} size='middle' style={{ backgroundColor: '#006064' }} type="primary"  >
                            Apply
                        </Button>

                        <PopConfirm
                            okButtonProps={{ loading: false, style: { backgroundColor: "#ef4444" } }}
                            onCancel={() => setOpen(false)}
                            open={PANIER_ENTREE ? open : false}
                            onConfirm={() => dispatch(cleanAll())}
                            placement='right'
                            title='Notifications'
                            description="Would you like to empty the basket?"
                            children={
                                <button onClick={() => setOpen(prev => !prev)} className='text-white p-1 rounded bg-red-400' >
                                    Clean the table
                                </button>
                            }

                        />

                    </div>
                </div>
            </main>
            {/* <Form.Item
                        style={{ marginBottom: '-20px' }}
                    >
                        <Button style={{ backgroundColor: "#35597B", color: '#fff' }} className="rounded-full" icon={<PlusOutlined />} onClick={() => dispatch(showModalsub('show-categorie'))} />
                    </Form.Item> */}


        </Modal>
    )
}

export default Supplies
