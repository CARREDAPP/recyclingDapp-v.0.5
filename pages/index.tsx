
import Input, { PasswordInputLogin } from '@/components/global/CustomInput';
import RootLayout from '@/components/layouts/LayoutLogin';
import { authuser } from '@/components/redux/user/user.slice';
import useAuth from '@/hook/use-auth';
import useAppDispatch from '@/hook/use-dispatch';
import { getCookies } from '@/utils/Cookies-server';
import { Button, Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useEffect, useState } from 'react';

function Home() {
  const { dispatch } = useAppDispatch();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    const { username, password } = data;
    const payload = {
      username,
      password,
    };
    dispatch(authuser(payload));

  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user.PROFILE || getCookies('session-user')!) router.push('/admin/dashboard');
  });
  return (
    <RootLayout>
      <div className='p-4 sm:p-7 '>
        <div className='text-center'>
          <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
            Authentification
          </h1>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 space-x-2'>
            Don't have an account yet?
            <Link className='text-[#006064]' href={'/auth/agence'} >Register</Link>
          </p>
        </div>
        <div className='mt-5'>
          {/* Form */}
          <form onSubmit={submit}>
            <div className='grid gap-y-4'>
              {/* Form Group */}
              <Input
                label="Email or username"
                name='username'
                placeholder='Enter your email'
                full={false}
                type='text'
                value={data.username}
                error=''
                onChange={handleChange}
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
                value={data.password}
                error=''
                onChange={handleChange}
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

              <Button htmlType='submit' className='h-11' loading={user.status_auth.isLoading} style={{ backgroundColor: '#006064', color: '#ffff' }} >
                Login
              </Button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </RootLayout>

  )
}

export default Home
