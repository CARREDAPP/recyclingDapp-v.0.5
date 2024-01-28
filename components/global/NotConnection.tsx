import useAuth from "@/hook/use-auth";
import Image from "next/image";

const NotConnected = () => {
    const { logout } = useAuth();
    return (
        <main className='w-full h-full flex flex-col justify-center items-center bg-white dark:bg-primary-dark'>
            <div >
                <div className="w-32 h-32 bg-slate-300 rotate-180 duration-500 rounded-ee-sm opacity-30 animate-spin">
                </div>
                <div className='w-96 h-96'>
                    <Image

                        src='/images/nodata.png'
                        alt='disconnected'
                        width={500}
                        height={500}
                        className='w-full h-full animate-bounce' />
                </div>

                <div className="w-32 h-32 bg-slate-300 rotate-180 duration-500 rounded-ee-sm opacity-30 animate-pulse">
                </div>
            </div>
            <div className='text-center'>
                <p className='py-3 text-lg'>You have been disconnected</p>
                <button
                    onClick={logout}
                    className='bg-red-600 p-4 py-2 text-sm w-full text-white rounded-md flex gap-2 justify-center items-center scale-95 hover:scale-100 duration-500'>
                    Please reconnect
                </button>
            </div>
        </main>
    );
};

export default NotConnected;