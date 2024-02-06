import { postImage } from '@/components/redux/products/products.slices';
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import useAppDispatch from '@/hook/use-dispatch'
import { Button, Form, Modal, Upload } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react'


function Gallery() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<any>();
    type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

    const { dispatch } = useAppDispatch();


    const getBase64 = (file: FileType): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };
    const onFinish = (e: any) => {
        dispatch(postImage({ "image": fileList![0].originFileObj }))
    }

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList)



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
                    className='w-full'
                    style={{ marginBottom: '6px' }}
                    label={'Image Upload'}
                    name={'picture'}
                    rules={[
                        {
                            required: false,
                            message: "Please enter the images",
                        },
                    ]}
                    getValueFromEvent={setFileList}
                >
                    <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture"
                        maxCount={1}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {uploadButton}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Form.Item>

                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button htmlType='submit' loading={false} style={{ backgroundColor: '#006064', color: '#ffff' }} >
                            Upload image
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default Gallery
