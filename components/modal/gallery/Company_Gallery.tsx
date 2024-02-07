import { patchEntreprises } from '@/components/redux/company/company.slice';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { useAppSelector } from '@/components/redux/store';
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Modal, Upload } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react'


function GalleryCompany() {
    const { status_img } = useAppSelector(state => state.createCompany);
    const { dispatch } = useAppDispatch();
    const onFinish = (values: any) => {
        const payload = { image: values.picture[0].originFileObj };
        dispatch(patchEntreprises(payload));
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const uploadButton = (
        <button className="w-full h-20 border border-dashed border-gray-400 rounded-lg flex flex-col justify-center items-center">
            <p className="text-sm text-gray-500">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
        </button>
    );

    return (
        <Modal
            onCancel={() => dispatch(showModal('close'))}
            open={true}
            footer={[]}
            centered
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item
                    label={'Image Upload'}
                    name={'picture'}
                    getValueFromEvent={normFile}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the images",
                        },
                    ]}
                >
                    <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture"
                        maxCount={1}
                    >
                        {uploadButton}
                    </Upload>
                </Form.Item>
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button htmlType='submit' loading={status_img.isLoading} style={{ backgroundColor: '#006064', color: '#ffff' }}>
                            Upload image
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
}

export default GalleryCompany;
