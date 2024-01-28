import '@/styles/globals.css'
import 'antd/dist/reset.css';
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import MainAppLayout from '@/components/layouts/MainAppLayout';
import Container from './Container';
import Toastmessage from '@/components/provider/Toastmessage';
import Layout from '@/components/layouts/Layout';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Layout>
        <Toastmessage />
        <Component {...pageProps} />
      </Layout>
    </Container>
  )
}
