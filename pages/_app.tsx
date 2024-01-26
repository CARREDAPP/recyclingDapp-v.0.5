import '@/styles/globals.css'
import 'antd/dist/reset.css';
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import MainAppLayout from '@/components/layouts/MainAppLayout';
import Container from './Container';
import Layout from '@/components/layouts/layout';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <MainAppLayout>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </MainAppLayout>
    </Container>



  )
}
