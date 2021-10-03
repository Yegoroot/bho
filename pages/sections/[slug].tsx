import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import { Typography } from '@mui/material'

import { Section, Category } from 'src/interfaces'

interface Props {
  section: Section
}

const MyComponent = (props: Props): React.ReactElement => {
  const { section } = props

  const { categories, title } = section

  console.log(section, 'section props')
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Typography
        variant="h1"
        sx={{ marginTop: 10 }}
      >
        {title}
      </Typography>
      {
        categories.map((category: Category) => <span>{category.title}</span>)
      }
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
