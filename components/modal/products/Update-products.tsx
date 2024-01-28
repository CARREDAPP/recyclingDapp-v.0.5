import { postproduct, updateproduct } from '@/components/redux/products/products.slices';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { useAppSelector } from '@/components/redux/store';
import useCategory from '@/hook/use-category';
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Input, Modal, Select } from 'antd'
import React from 'react'

function UpdateProducts() {
    const { dispatch } = useAppDispatch();
    const [form] = Form.useForm()
    const { GET_CATEGORY } = useCategory();
    const { status_post, DATA_PRODUCT } = useAppSelector(state => state.createProducts)
    const onFinish = (e: any) => {
        const payload = {
            id: DATA_PRODUCT?.id,
            designation: e.designation,
            description: e.description,
            price: e.price,
            units: e.units,
            qteAlerte: e.qteAlerte,
            categoryId: e.categoryId,
            form
        }
        dispatch(updateproduct(payload))
    }
    return (
        <Modal
            centered
            open={true}
            footer={[]}
            onCancel={() => dispatch(showModal('close'))}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                Update Products
            </p>}
        >
            <Form layout='vertical'
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Designation'}
                    initialValue={DATA_PRODUCT?.designation}
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
                    initialValue={DATA_PRODUCT?.units}
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
                    initialValue={DATA_PRODUCT?.price}
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
                    initialValue={DATA_PRODUCT?.qteAlerte}
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
                    name={'categoryId'}
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
                    initialValue={DATA_PRODUCT?.description}
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
                        <Button loading={status_post.isLoading} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            save
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default UpdateProducts
