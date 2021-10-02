import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

import { Section } from '@/pages/interfaces'
import MainLayout from '../layouts/Main'
import theme from '../theme'

interface Props extends AppProps {
  sections: Section[]
}

const App = ((props: Props) => {
  const { Component, pageProps, sections } = props
  return (
    <>
      <Head>
        {/* <title>Next App</title> */}
        <link
          href="/favicon.ico"
          rel="icon"
        />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout sections={sections}>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
})

const { publicRuntimeConfig } = getConfig()

// @ts-ignore
App.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/sections`)
  const sections = await res.json()
  return sections
}

export default App
