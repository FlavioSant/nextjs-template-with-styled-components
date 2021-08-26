import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NextJS Starter</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
