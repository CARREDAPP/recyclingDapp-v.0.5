import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, Select } from 'antd'
import useAppDispatch from '@/hook/use-dispatch'
import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { countries } from '@/types/nationalite';
import { postEntreprises } from '@/components/redux/company/company.slice';
import { useAppSelector } from '@/components/redux/store';
import Image from 'next/image';

function Agence() {
    const { dispatch } = useAppDispatch();
    const [form] = Form.useForm();
    const { status_post } = useAppSelector(state => state.createCompany);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position): any => {
                        setLatitude(position.coords.latitude as any);
                        setLongitude(position.coords.longitude as any);
                    },

                );
            }
        };
        getLocation();
    }, []);

    const onFinish = (e: any) => {
        const payload = {
            companyName: e.companyName,
            digitalAdress: e.digitalAdress,
            phone: e.phone,
            mailCompany: e.mailCompany,
            nationalite: e.nationalite,
            province: e.province,
            ville: e.ville,
            avenue: e.avenue,
            codePostale: e.codePostale,
            longitute: longitude,
            latitude: latitude,
            form
        }
        dispatch(postEntreprises(payload));
    }

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
                form={form}
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
                <Form.Item
                    style={{ marginBottom: '6px' }}
                    label={'Nationality'}
                    name={'nationalite'}
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
                        <Button htmlType='submit' loading={status_post.isLoading} style={{ backgroundColor: '#006064', color: '#ffff' }} >
                            Save
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Drawer>

    )
}

export default Agence
