import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

import { Section, General } from 'src/interfaces'
import MainLayout from '../layouts/Main'
import theme from '../theme'

interface Props extends AppProps {
  sections: Section[],
  general: General
}

const App = ((props: Props) => {
  const {
    Component, pageProps, sections, general
  } = props

  return (
    <>
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
    </>
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
