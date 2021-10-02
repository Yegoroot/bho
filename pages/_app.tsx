import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import fetch from 'isomorphic-unfetch'
// import getConfig from 'next/config'
import MainLayout from '../src/layouts/Main'
import theme from '../theme'

const App = ((props: AppProps) => {
  const { Component, pageProps } = props
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
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
})

// const { publicRuntimeConfig } = getConfig()

// App.getInitialProps = async () => {
//   console.log(`${publicRuntimeConfig.API_URL}/navigations`)
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
//   const navigation = await res.json()
//   return navigation
// }

export default App
