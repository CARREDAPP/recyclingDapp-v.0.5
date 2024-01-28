'use client';
import useAuth from '@/hook/use-auth';
import Header from './Header';
import Sidebar from './Siderbar';
import NotConnected from '../global/NotConnection';

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();

    return (
        <main className='h-screen'>
            <Sidebar />
            <main className='flex flex-col h-full'>
                <Header />
                <div className='w-full pt-5 px-4 sm:px-6 md:px-8 lg:pl-64 bg-[#f3f4f6] dark:bg-slate-700 dark:text-[#f3f4f6] flex-grow'>
                    {user.PROFILE ? children : <NotConnected />}
                </div>
            </main>
        </main>
    );
};

export default AdminPanel;
