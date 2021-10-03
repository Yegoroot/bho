import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import { Typography } from '@mui/material'

import { Section, Category } from 'src/interfaces'
import CategoryCard from 'components/CategoryCard'

interface Props {
  section: Section
}

const MyComponent = (props: Props): React.ReactElement => {
  const { section } = props

  return (
    <>
      <Head>
        <title>{section.title}</title>
      </Head>

      <Typography variant="h1">{section.title}</Typography>

      {section.categories.map((category: Category) => <CategoryCard category={category} />) }

    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: NextPageContext) {
  const { slug } = context.query

  const res = await fetch(`${publicRuntimeConfig.API_URL}/sections?slug=${slug}`)
  const filteredSections = await res.json()
  const section = filteredSections[0]
  return {
    props: { section },
  }
}

export default MyComponent
