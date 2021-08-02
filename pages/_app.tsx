import React from 'react'
import Head from 'next/head'
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { MAIN_PAGE_TITLE, DIRECTION } from '../constants'
import theme from '../theme'
import Main from './Layouts/Main';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <>
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
            <Main>
            <Component {...pageProps} />
            </Main>
          </StylesProvider>
        </ThemeProvider>
      </body>
    </>
  )
}
