// import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import { Section, General } from 'src/@types/interfaces'
import createEmotionCache from 'src/createEmotionCache'
import MainLayout from 'src/layouts/Main'
import theme from 'src/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache;
  sections: Section[],
  general: General
}

const App = ((props: Props) => {
  const {
    Component, pageProps, sections, general, emotionCache = clientSideEmotionCache
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{general.title}</title>
        <link
          href="/favicon.ico"
          rel="icon"
        />
        <meta
          name="description"
          content={general.description}
        />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout
          sections={sections}
          general={general}
        >
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  )
})

const { publicRuntimeConfig } = getConfig()

// @ts-ignore
App.getInitialProps = async () => {
  const resS = await fetch(`${publicRuntimeConfig.API_URL}/sections`)
  const sections = await resS.json()

  const resG = await fetch(`${publicRuntimeConfig.API_URL}/general`)
  const general = await resG.json()
  return {
    sections,
    general
  }
}

export default App
