import { postCategories, updateCategories } from '@/components/redux/category/category.slices';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { useAppSelector } from '@/components/redux/store';
import useAppDispatch from '@/hook/use-dispatch';
import { Button, Form, Input, Modal } from 'antd'
import React from 'react'

function UpdateCategory() {
    const { dispatch } = useAppDispatch();
    const [form] = Form.useForm();
    const { DATA_CATEGORY, status_update } = useAppSelector(state => state.createCategory)

    const onFinish = (e: any) => {
        const payload = {
            designation: e.designation,
            description: e.description,
            id: DATA_CATEGORY?.id,
            form
        }
        dispatch(updateCategories(payload));
    }
    return (
        <Modal
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                Update Category
            </p>}
            centered
            open={true}
            onCancel={() => dispatch(showModal('closed'))}
            footer={[]}

        >
            <Form
                form={form}
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item
                    initialValue={DATA_CATEGORY?.designation}
                    style={{ marginBottom: '6px' }}
                    label={'Designation'}
                    name={'designation'}
                    rules={[
                        {
                            required: true,
                            message: "Veuillez saisir la designation",
                        },
                    ]}>
                    <Input size='middle' placeholder='Entrez la designation' />
                </Form.Item>
                <Form.Item
                    initialValue={DATA_CATEGORY?.description}
                    style={{ marginBottom: '6px' }}
                    label={'Description'}
                    name={'description'}
                    rules={[
                        {
                            required: true,
                            message: "Veuillez saisir la description"
                        },
                    ]}>
                    <Input.TextArea size='middle' placeholder='Entrez la description' />
                </Form.Item>
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button loading={status_update.isLoading} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            Update
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default UpdateCategory
