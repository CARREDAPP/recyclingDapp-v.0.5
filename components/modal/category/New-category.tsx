import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useAppDispatch from '@/hook/use-dispatch';
import { Button, Form, Input, Modal } from 'antd'
import React from 'react'

function NewCategory() {
    const { dispatch } = useAppDispatch();
    return (
        <Modal
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                New Category
            </p>}
            centered
            open={true}
            onCancel={() => dispatch(showModal('closed'))}
            footer={[]}

        >
            <Form
                layout='vertical'
            >
                <Form.Item
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
                        <Button loading={false} size='middle' style={{ backgroundColor: '#006064' }} type="primary" htmlType='submit' >
                            Enregistrer
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default NewCategory
