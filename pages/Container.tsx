
import AntdLayout from '@/components/provider/AntdProvider';
import ModalManager from '@/components/provider/ModalManager';
import ReduxProvider from '@/components/provider/ReduxProvider';
import { HSThemeAppearance } from '@/utils/theme';
import NextTopLoader from 'nextjs-toploader';
import "antd/dist/reset.css";
import { useEffect } from 'react';


const Container = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        import('preline');
        HSThemeAppearance.init();
    }, []);
    return (
        <>
            <ReduxProvider>
                <NextTopLoader
                    color='#1F6FEB'
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
                    <ModalManager />
                    {children}
                </AntdLayout>
            </ReduxProvider>
        </>
    );
};
export default Container;
