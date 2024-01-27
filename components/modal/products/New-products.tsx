import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useCategory from '@/hook/use-category';
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Input, Modal, Select } from 'antd'
import React from 'react'

function NewProducts() {
    const { dispatch } = useAppDispatch();
    const { GET_CATEGORY } = useCategory();
    return (
        <Modal
            centered
            open={true}
            footer={[]}
            onCancel={() => dispatch(showModal('close'))}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                New Products
            </p>}
        >
            <Form layout='vertical'>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Designation'}
                    name={'designation'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the designation",
                        },
                    ]}>
                    <Input size='middle' placeholder='Enter the designation' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Units'}
                    name={'units'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the units",
                        },
                    ]}>
                    <Input size='middle' placeholder="Enter the units" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Price'}
                    name={'price'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the price",
                        },
                    ]}>
                    <Input size='middle' placeholder='Enter the price' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Quantity alerts'}
                    name={'qteAlerte'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter alert quantity",
                        },
                    ]}>
                    <Input size='middle' placeholder='Enter the alert quantity' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Catégorie'}
                    name={'categorie'}
                    rules={[
                        {
                            required: true,
                            message: "Please select category"
                        },
                    ]}>
                    <Select className='w-full' size='middle' placeholder='Enter Category'
                        options={GET_CATEGORY?.data.map((items) => ({
                            label: items?.designation,
                            value: items?.id
                        }))}
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Description'}
                    name={'description'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter description",
                        },
                    ]}>
                    <Input.TextArea size='middle' placeholder='Enter description' />
                </Form.Item>
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button loading={false} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            Enregistrer
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default NewProducts
