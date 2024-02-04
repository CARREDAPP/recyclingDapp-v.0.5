import { Button, Form, Input } from 'antd'
import React from 'react'

function Update() {
    return (

        <div className='bg-white col-span-3 rounded  h-full  shadow-md mx-9 p-4 -translate-y-24'>
            <Form
                layout='vertical'

            >
                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
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
                        className='w-full'
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
                </div>
                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
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
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Company Email'}
                        name={'mailCompany'}
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
                </div>

                <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Location'}
                        name={'province'}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the province",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the province" />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
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
                </div>
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

                {/* <div className='flex items-center space-x-4'>
                    <Form.Item
                        className='w-full'
                        style={{ marginBottom: '6px' }}
                        label={'Longitude'}
                        name={'longitute'}
                        initialValue={longitude}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the longitude",
                            },
                        ]}>
                        <Input size='middle' placeholder="Enter the longitude" />
                    </Form.Item>
                    <Form.Item
                        initialValue={latitude}
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
                </div> */}
                <div className='flex items-center w-full justify-end'>
                    <Form.Item style={{ marginTop: '10px' }}>
                        <Button htmlType='submit' loading={false} style={{ backgroundColor: '#006064', color: '#ffff' }} >
                            Update
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>

    )
}

export default Update
