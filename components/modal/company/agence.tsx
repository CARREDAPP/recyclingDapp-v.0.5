import React from 'react'
import { Button, Drawer, Form, Input, Select } from 'antd'
import useAppDispatch from '@/hook/use-dispatch'
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { countries } from '@/types/nationalite';
const { Option } = Select;

function Agence() {
    const { dispatch } = useAppDispatch();

    const onFinish = () => {
        const payload = {

        }
    }
    // companyName: string,
    // digitalAdress: string,
    // phone: string,
    // mailCompany: string,
    // nationalite: string,
    // province: string,
    // ville: string,
    // avenue: string,
    // codePostale: string,
    // imageUrl ?: string,
    // longitute: string,
    // latitude: string,
    return (
        <Drawer
            width={750}
            title={<p className='text-2xl text-slate-600 dark:text-[#f3f4f6] font-extrabold'>
                New Company
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
                    label={'Company Name'}
                    name={'companyName'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the Company Name",
                        },
                    ]}>
                    <Input size='middle' placeholder="Enter the Company Name" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Digital Adress'}
                    name={'digitalAdress'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the Digital Adress",
                        },
                    ]}>
                    <Input size='middle' placeholder="Enter the Digital Adress" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Phone'}
                    name={'phone'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the phone",
                        },
                        {
                            pattern: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit phone number",
                        }
                    ]}
                >
                    <Input size='middle' placeholder="Enter the phone" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Company Email'}
                    name={'companyEmail'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the email",
                        },
                        {
                            type: 'email',
                            message: 'Please enter a valid email address',
                        }
                    ]}
                >
                    <Input size='middle' placeholder="Enter the email" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Nationality'}
                    name={'nationality'}
                    rules={[
                        {
                            required: true,
                            message: "Please select the nationality",
                        },
                    ]}
                >
                    <Select
                        showSearch
                        size="middle"
                        placeholder="Select the nationality"
                        filterOption={(inputValue, option) => {
                            return (
                                option?.value?.toUpperCase().indexOf(inputValue?.toUpperCase()) !== -1
                            );
                        }}
                        options={countries.map(country => ({
                            label: country,
                            value: country
                        }))}

                    />

                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Province'}
                    name={'province'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the province",
                        },
                    ]}>
                    <Input size='middle' placeholder="Enter the province" />
                </Form.Item>
                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'City'}
                        name={'ville'}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the city",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the city" />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Street'}
                        name={'avenue'}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the street",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the street" />
                    </Form.Item>
                </div>
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'ZIP code'}
                    name={'codePostale'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the ZIP code",
                        },
                    ]}>
                    <Input size='middle' placeholder="Enter the ZIP code" />
                </Form.Item>

                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Longitude'}
                        name={'longitute'}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the longitude",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the longitude" />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Latitude'}
                        name={'latitude'}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the latitude",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the latitude" />
                    </Form.Item>
                </div>
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button htmlType='submit' loading={false} style={{ backgroundColor: '#006064', color: '#ffff' }} >
                            Save
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Drawer>

    )
}

export default Agence
