import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IPageBreadcrumbProps {
    breadcrumbItems: HrefLink[];
}

function PageBreadcrumb({ breadcrumbItems }: IPageBreadcrumbProps) {
    const pathname = usePathname();
    return (
        <Breadcrumb separator="/">
            {breadcrumbItems?.map((item, index) => (
                <Breadcrumb.Item key={index}>
                    <Link className={`dark:!text-slate-400 ${pathname === item.href && 'text-black dark:!text-slate-300 font-medium bg-gray-200 dark:bg-slate-600'}`} href={item?.href}>{item?.label}</Link>
                </Breadcrumb.Item >
            ))}
        </Breadcrumb>
    );
}

export default PageBreadcrumb;
