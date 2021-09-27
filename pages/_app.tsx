import React from 'react'
import Head from 'next/head'
import { ThemeProvider, StylesProvider, jssPreset } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { CacheProvider, EmotionCache } from '@emotion/react'
import jssTemplate from 'jss-plugin-template'
import '../theme/styles.css'

import { MAIN_PAGE_TITLE, DIRECTION } from '../constants'
import theme from '../theme'
import MainLayout from './Layouts/Main'
import createEmotionCache from '../src/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const jss = create({ plugins: [jssTemplate(), ...jssPreset().plugins, rtl()] })

export default function MyApp(props: MyAppProps): React.ReactElement {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>

      <Head>
        <title>{MAIN_PAGE_TITLE}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <body dir={DIRECTION}>

        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </StylesProvider>
        </ThemeProvider>

      </body>

    </CacheProvider>
  )
}
