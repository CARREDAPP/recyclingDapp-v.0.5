import { showModal } from '@/components/redux/show-modal/slice.showmodal'
import { useAppSelector } from '@/components/redux/store'
import { postuser, updateuser } from '@/components/redux/user/user.slice'
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Input, Modal } from 'antd'
import React from 'react'


function UpdateUser() {
    const { dispatch } = useAppDispatch()
    const [form] = Form.useForm();
    const { status_update, DATA_USER } = useAppSelector(state => state.createUser)

    const onFinish = (e: any) => {
        const payload = {
            id: DATA_USER?.id,
            fullname: e.fullname,
            password: e.password,
            username: e.username,
            form
        }
        dispatch(updateuser(payload));
    }

    return (
        <Modal
            centered
            open={true}
            footer={[]}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>Update user</p>}
            onCancel={() => dispatch(showModal('closed'))} >
            <Form
                form={form}
                onFinish={onFinish}
                layout='vertical'
            >
                <Form.Item
                    initialValue={DATA_USER?.fullname}
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
                    initialValue={DATA_USER?.username}
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
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button loading={status_update.isLoading} size='large' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            Update
                        </Button>
                    </Form.Item>
                </div>

            </Form>
        </Modal>
    )
}

export default UpdateUser
