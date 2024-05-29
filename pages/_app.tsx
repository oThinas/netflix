/** Core */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" type="image/x-icon" />
      </Head>

      <Toaster
        toastOptions={{
          style: {
            color: 'white',
            backgroundColor: 'black',
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
