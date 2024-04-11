
import AntdLayout from '@/components/provider/AntdProvider';
import ModalManager from '@/components/provider/ModalManager';
import ReduxProvider from '@/components/provider/ReduxProvider';
import { HSThemeAppearance } from '@/utils/theme';
import NextTopLoader from 'nextjs-toploader';
import "antd/dist/reset.css";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MainAppLayout from '@/components/layouts/MainAppLayout';
import RootLayout from '@/components/layouts/LayoutLogin';


const Container = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const MainLayout = pathname.includes('admin') ? MainAppLayout : RootLayout;

    useEffect(() => {
        import('preline');
        HSThemeAppearance.init();
    }, []);
    return (
        <>
            <ReduxProvider>
                <NextTopLoader
                    color='#006064'
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing='ease'
                    speed={200}
                    shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                />
                <AntdLayout>
                    <MainLayout>
                        <ModalManager />
                        {children}
                    </MainLayout>
                </AntdLayout>
            </ReduxProvider>
        </>
    );
};
export default Container;
