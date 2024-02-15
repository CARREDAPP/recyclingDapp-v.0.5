import '@/styles/globals.css'
import 'antd/dist/reset.css';
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import MainAppLayout from '@/components/layouts/MainAppLayout';
import Container from './Container';
import Toastmessage from '@/components/provider/Toastmessage';
import Layout from '@/components/layouts/Layout';
import { MeshProvider } from "@meshsdk/react";
import { usePathname } from 'next/navigation'
import RootLayout from '@/components/layouts/LayoutLogin';





export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const MainLayout = pathname === '/' ? RootLayout : MainAppLayout;
  return (
    <Container>
      <MeshProvider>
        <Layout>
          <Toastmessage />
          <Component {...pageProps} />
        </Layout>
      </MeshProvider>
    </Container>
  )
}
