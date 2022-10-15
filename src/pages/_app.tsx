import { useEffect } from 'react';
import { AppWrapper } from '@/context/AppContext';
import type { AppProps } from 'next/app';
import '../styles/base.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.getElementById('__next')?.classList.add('todoapp');
  }, []);
  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
