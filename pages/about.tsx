import React from 'react'
import Head from 'next/head'

import { BaseProps, About as AboutProps } from 'src/interfaces'
import { KEYWORDS } from '../constants'

interface Props extends BaseProps {
  about: AboutProps
}

export default function About(props: Props): React.ReactElement {
  const { about } = props

  console.log(about, 'about props')
  return (
    <>
      <Head>
        <title>{about.title}</title>
        <meta
          name="description"
          content={about.description}
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
      <main>
        <h1>
          {about.title}
        </h1>
        <div>
          {about.text}
        </div>
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
