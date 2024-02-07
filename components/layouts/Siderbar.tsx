import Link from 'next/link';
import { IoIosArrowDown, IoIosRefresh } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { LINK_PRODUCT, LINK_RAPPORT, LINK_SETTINGS, LINK_SUPPLY } from '@/utils/linkNavigator';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { HrefLink } from '@/types';
import { VscSettings } from "react-icons/vsc";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LINK_GRICOM } from '@/utils/LinkNavigator';
import ActiveLink from '../global/Navigator';
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsBasket3 } from 'react-icons/bs';


const Sidebar = () => {
    const pathname = usePathname()
    const RenderItem = ({
        headerText,
        links,
        icon,
    }: {
        headerText: string;
        links: any[];
        icon: React.ReactNode;
    }) => {

        return {
            label: (
                <div className='flex gap-2 items-center justify-between text-[#777c85] scale-95 hover:scale-100 duration-500'>
                    <div className='flex gap-2 items-center text-[#737a87]'>
                        <div className='text-xl'>{icon}</div>
                        <span className='text-sm'>{headerText}</span>
                    </div>
                    <div>
                        <IoIosArrowDown className='text-[14px]' />
                    </div>
                </div>
            ),
            children: (
                <ul className='ml-2 text-gray-500 '>
                    {links.map((link: HrefLink, i) => (
                        <li key={i} className='my-2 scale-95 hover:scale-100 duration-500'>
                            <Link
                                href={link.href}
                                className={`hover:text-[#006064] duration-150 flex gap-2 items-center ${pathname ===
                                    link.href && 'text-[#006064] font-bold'}`}>
                                <MdKeyboardDoubleArrowRight className='text-[14px]' />
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            ),
            showArrow: false,

        };
    };


    const items: CollapseProps['items'] = [];
    items.push(
        RenderItem({
            headerText: 'Supplies',
            icon: <BsBasket3 className='text-xl' />,
            links: LINK_SUPPLY
        })
    );
    items.push(
        RenderItem({
            headerText: 'Products',
            icon: <MdProductionQuantityLimits className='text-xl' />,
            links: LINK_PRODUCT
        })
    );
    items.push(
        RenderItem({
            headerText: 'Reports',
            icon: <HiOutlineDocumentReport className='text-xl' />,
            links: LINK_RAPPORT
        })
    );
    items.push(
        RenderItem({
            headerText: 'Settings',
            icon: <VscSettings className='text-xl' />,
            links: LINK_SETTINGS
        })
    );
    return (

        <aside
            id='application-sidebar'
            className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-56 bg-white border-r border-transparent pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800'>
            <div className='px-6 mb-8'>
                <Link
                    className='flex-none text-2xl font-bold text-center text-[#006064] dark:text-white'
                    href='/'
                    aria-label='Brand'>
                    CarreDApp
                </Link>
            </div>

            {LINK_GRICOM.map((menuItems, index) => {
                return <ActiveLink href={menuItems.href} key={index} pathname={pathname} >
                    {menuItems.icon}
                    <span>{menuItems.label}</span>

                </ActiveLink>
            })}
            <Collapse
                ghost={true}
                accordion
                items={items}
                bordered={true}
                size='small'
            />
            <div className={`  hover:bg-red-500  hover:bg-opacity-100 rounded-md p-1.5 text-[14.3px] mx-2 my-2  text-red-500 scale-95 hover:scale-100 duration-500 absolute bottom-7 w-52 hover:text-white bg-slate-300 bg-opacity-20`}>
                <Link
                    href={'#'}
                    className='flex gap-2 items-center  duration-150'>
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

    );
};

export default Sidebar;
