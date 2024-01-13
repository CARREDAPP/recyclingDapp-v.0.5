import Link from 'next/link';
import { IoIosRefresh } from "react-icons/io";


const Sidebar = () => {
    return (
        <>
            <aside
                id='application-sidebar'
                className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-56 bg-white border-r border-transparent pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800'>
                <div className='px-6 mb-8'>
                    <Link
                        className='flex-none text-xl font-bold text-center text-[#35597B] dark:text-white'
                        href='/'
                        aria-label='Brand'>
                        RECYCLINGDAPP
                    </Link>
                </div>

                <div className={`  hover:bg-red-500  hover:bg-opacity-100 rounded-md p-1.5 text-[14.3px] mx-2 my-2  text-red-500 scale-95 hover:scale-100 duration-500 absolute bottom-7 w-52 hover:text-white bg-slate-300 bg-opacity-20`}>
                    <Link
                        href={'#'}
                        className='flex gap-2 items-center  duration-150'
                    >
                        <IoIosRefresh className='text-xl' />
                        <span>Déconnexion</span>
                    </Link>
                </div>
                <nav
                    className='hs-accordion-group p-6 w-full flex flex-col flex-wrap'
                    data-hs-accordion-always-open=''
                >

                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
