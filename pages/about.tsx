/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import { Typography } from '@material-ui/core'
import { MAIN_PAGE_TITLE, DESCRIPTION, KEYWORDS } from '../constants'

export default function About() {
  return (
    <>
      <Head>
        <title>{MAIN_PAGE_TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta
          name="keywords"
          content={KEYWORDS}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Typography> sdfsdf </Typography>

      <h1>
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>

    </>
  )
}
