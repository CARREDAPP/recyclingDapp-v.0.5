import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useAppDispatch from '@/hook/use-dispatch'
import useProducts from '@/hook/use-products';
import { Button, Form, Input, InputNumber, Modal, Select, Table } from 'antd'
import React from 'react'

function Supplies() {
    const [form] = Form.useForm();
    const { dispatch } = useAppDispatch();
    const { GET_PRODUCT } = useProducts();

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
            <Form
                form={form}
                layout='vertical'
            >
                <main>
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
                                loading={false}
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
                                name={'quantiy'}
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
                    <div>
                        <Table size='small'
                            pagination={{ hideOnSinglePage: true, defaultPageSize: 15 }}
                            bordered={false}
                        />
                        <div className='flex items-center w-full'>
                            <Form.Item style={{ marginTop: '10px' }}>
                                <Button loading={false} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                                    Confirmation of the order
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </main>
                {/* <Form.Item
                        style={{ marginBottom: '-20px' }}
                    >
                        <Button style={{ backgroundColor: "#35597B", color: '#fff' }} className="rounded-full" icon={<PlusOutlined />} onClick={() => dispatch(showModalsub('show-categorie'))} />
                    </Form.Item> */}

            </Form>
        </Modal>
    )
}

export default Supplies
