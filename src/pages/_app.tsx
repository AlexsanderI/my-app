import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/index';
// import type { AppProps } from 'next/app';
import createEmotionCache from '@/theme/createEmotionCache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
