import { CssBaseline } from '@mui/material';
import ThemeProvider from '@/theme/ThemeProvider';
import { theme } from '../theme/index';
import createEmotionCache from '@/theme/createEmotionCache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme} emotionCache={emotionCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
