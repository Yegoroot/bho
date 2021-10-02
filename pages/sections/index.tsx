import React from 'react'
import Head from 'next/head'

import { BaseProps, Section } from 'src/interfaces'
import { KEYWORDS } from 'src/constants'

interface Props extends BaseProps {
  sections: Section[]
}

export default function SectionPage(props: Props): React.ReactElement {
  const { sections } = props

  console.log(sections, 'section props')
  return (
    <>
      <Head>
        {/* <title>{about.title}</title>
        <meta
          name="description"
          content={about.description}
        /> */}
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
        {sections.map((section) => <span key={section.id}>{section.title}</span>)}
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
