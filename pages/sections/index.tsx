import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Typography } from '@mui/material'

import { BaseProps, Section } from 'src/@types/interfaces'

interface Props extends BaseProps {
  sections: Section[]
}

export default function SectionPage(props: Props): React.ReactElement {
  const { sections } = props

  return (
    <>
      <Head>
        {/* <title>{about.title}</title>
        <meta
          name="description"
          content={about.description}
        /> */}
      </Head>
      <main>
        <Typography variant="h1">Разделы</Typography>
        <ul>

          {sections.map((section) => <li key={section.id}>{section.title}</li>)}
        </ul>
      </main>

    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/sections`)
  const sections: Section[] = await res.json()

  return {
    props: {
      sections
    },
  }
}
