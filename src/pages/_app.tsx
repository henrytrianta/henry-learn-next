import Head from 'next/head';

import { useAnalytics } from '@happykit/analytics';
import { useState, useEffect } from 'react';

import { ThemeProvider } from 'next-themes';

// Type
import type { AppProps } from 'next/app';
// Style
import '@/styles/global.css';
// Component
import Layout from '@/components/_layout';

const App = ({ Component, pageProps, router }: AppProps) => {
  useAnalytics({ publicKey: `analytics_pub_41f04aa307` });

  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsFirstMount(false);
    };
    router.events.on(`routeChangeStart`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeStart`, handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          <Component
            {...pageProps}
            isFirstMount={isFirstMount}
            key={router.route}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
