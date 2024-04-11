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

import type { Metadata } from "next";

const APP_NAME = "Care dApp";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};



export default function App({ Component, pageProps }: AppProps) {

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
