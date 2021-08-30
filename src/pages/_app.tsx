import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import { AppTheme } from '../types/utils/colors';

import { Layout } from '../components/Layout';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>('light');

  const toggleAppTheme = useCallback(() => {
    setAppTheme(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storageTheme = localStorage.getItem('@appTheme') as AppTheme | null;
      setAppTheme(storageTheme || 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@appTheme', appTheme);
  }, [appTheme]);

  return (
    <ThemeProvider theme={theme.colors[appTheme]}>
      <GlobalStyle />
      <Head>
        <title>NextJS Starter</title>
        <link
          rel="shortcut icon"
          href="static/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Layout appTheme={appTheme} toggleAppTheme={toggleAppTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
