import Input, { PasswordInputLogin } from '@/components/global/CustomInput';
import Layout from '@/components/layouts/layout';
import { Button } from 'antd';
import React from 'react';

function Login() {
  return (
    <div className='p-4 sm:p-7 '>
      <div className='text-center'>
        <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
          To log in
        </h1>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
          Please enter your login credentials          </p>
      </div>
      <div className='mt-5'>
        {/* Form */}
        <form onSubmit={undefined}>
          <div className='grid gap-y-4'>
            {/* Form Group */}
            <Input
              label="Email or username"
              name='username'
              placeholder='Enter your email'
              full={false}
              type='text'
              value={""}
              error=''
              onChange={() => null}
              required
              aria-describedby='email-error'
            />
            {/* End Form Group */}
            {/* Form Group */}
            <PasswordInputLogin
              label='Password'
              name='password'
              placeholder='Enter password'
              full={false}
              type='password'
              value={null}
              error=''
              onChange={() => null}
              required
              aria-describedby='password-error'
            />
            {/* End Form Group */}
            {/* Checkbox */}
            <div className='flex items-center'>
              <div className='flex'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='shrink-0 mt-0.5 border-gray-200 rounded text-primary-600 pointer-events-none focus:ring-primary-950 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary-950 dark:checked:border-primary-950 dark:focus:ring-offset-gray-800'
                />
              </div>
              <div className='ml-3'>
                <label
                  htmlFor='remember-me'
                  className='text-sm dark:text-white'
                >
                  Remember me
                </label>
              </div>
            </div>
            {/* End Checkbox */}

            <Button htmlType='submit' className='h-11' loading={false} style={{ backgroundColor: '#35597B', color: '#ffff' }} >
              Logn-in
            </Button>

          </div>
        </form>
        {/* End Form */}
      </div>
    </div>

  )
}

export default Login
