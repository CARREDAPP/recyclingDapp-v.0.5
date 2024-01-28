import React from 'react'
import { Drawer, Form, Input } from 'antd'
import useAppDispatch from '@/hook/use-dispatch'
import { showModal } from '@/components/redux/show-modal/slice.showmodal';

function Agence() {
    const { dispatch } = useAppDispatch();
    const onFinish = () => {
        const payload = {

        }
    }

    return (
        <Drawer
            width={750}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                New Agence
            </p>}
            open={true}
            onClose={() => dispatch(showModal('close'))}
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
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
                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
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
                        className='w-full'
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
                </div>
            </Form>
        </Drawer>

    )
}

export default Agence
