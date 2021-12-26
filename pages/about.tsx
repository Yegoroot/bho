import React from 'react'
import Head from 'next/head'
import { Typography } from '@mui/material'
import fetch from 'isomorphic-unfetch'

import { BaseProps, About as AboutProps } from 'src/@types/interfaces'

interface Props extends BaseProps {
  about: AboutProps
}

export default function About(props: Props): React.ReactElement {
  const { about } = props

  return (
    <>
      <Head>
        <title>{about.title}</title>
        <meta
          name="description"
          content={about.description}
        />
      </Head>
      <main>
        <Typography variant="h1">{about.title}</Typography>
        <Typography variant="body1">{about.text}</Typography>
      </main>

    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/about`)
  const about: AboutProps = await res.json()

  return {
    props: {
      about
    },
  }
}
