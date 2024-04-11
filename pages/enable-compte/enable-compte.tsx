import Input from '@/components/global/CustomInput';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

function EnableCompte() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    return (
        <div className='p-4 sm:p-7'>
            <div className='text-center'>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                    ACTIVE YOUR COMPTE
                </h1>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                    <Link
                        className='text-primary-950 decoration-2 hover:underline font-medium'
                        href='/'>
                        Log in here
                    </Link>
                </p>
            </div>
            <div className='mt-5'>
                {/* Form */}
                <form>
                    <div className='grid gap-y-4'>
                        {/* Form Group */}
                        <Input
                            label='E-mail address'
                            name='username'
                            placeholder='Enter your email'
                            full={false}
                            type='mail'
                            value={formData.email}
                            error=''
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.currentTarget.value })
                            }
                            required
                            aria-describedby='email-error'
                        />
                        <Button
                            style={{ backgroundColor: '#006064', color: '#fff' }}
                            className='h-11'
                            htmlType='submit'>
                            Activate your account
                        </Button>
                    </div>
                </form>
                {/* End Form */}
            </div>
        </div>
    );
}

export default EnableCompte
// Recycler davantage de plastiques peut aider les entreprises locales et créer des emplois tout en soutenant les objectifs de durabilité.