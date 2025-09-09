import 'src/styles/globals.css';

import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from 'src/helpers/create-emotion-cache';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'src/helpers/theme';
const clientSideEmotionCache = createEmotionCache()
export interface MyAppProps extends AppProps{
  emotionCache?: EmotionCache
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return( 
    <CacheProvider value={emotionCache}>
       <Head>
      <meta name='viewport' content='initial-scale=1, width = device-width'></meta>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Component {...pageProps} />
    </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
