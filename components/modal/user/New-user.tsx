import { showModal } from '@/components/redux/show-modal/slice.showmodal'
import { useAppSelector } from '@/components/redux/store'
import { postuser } from '@/components/redux/user/user.slice'
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Input, Modal } from 'antd'
import React from 'react'


function NewUser() {
    const { dispatch } = useAppDispatch()
    const [form] = Form.useForm();
    const { status_post } = useAppSelector(state => state.createUser)

    const onFinish = (e: any) => {
        const payload = {
            fullname: e.fullname,
            password: e.password,
            username: e.username,
            form
        }
        dispatch(postuser(payload));
    }

    return (
        <Modal
            centered
            open={true}
            footer={[]}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>New user</p>}
            onCancel={() => dispatch(showModal('closed'))} >
            <Form
                form={form}
                onFinish={onFinish}
                layout='vertical'
            >
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Full Name'}
                    name={'fullname'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your full name",
                        },
                    ]}>
                    <Input size='middle' placeholder='Enter your full name' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px', backgroundColor: 'transparent' }}
                    label={'Email'}
                    name={'username'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your email",
                        },
                    ]}>
                    <Input size='middle' type='email' placeholder='Enter your email' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px', backgroundColor: 'transparent' }}
                    label={'Password'}
                    name={'password'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your password",
                        },
                        {
                            min: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                        }
                    ]}>
                    <Input.Password size='middle' placeholder='Enter your password' />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: '6px', backgroundColor: 'transparent' }}
                    label={'Confirm Password'}
                    name={'confirmPassword'}
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match'));
                            },
                        }),
                    ]}
                >
                    <Input.Password size='middle' placeholder='Confirm your password' />
                </Form.Item>

                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button loading={status_post.isLoading} size='large' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            Save
                        </Button>
                    </Form.Item>
                </div>

            </Form>
        </Modal>
    )
}

export default NewUser
