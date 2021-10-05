import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { Typography, Grid } from '@mui/material'

import { Section, Category } from 'src/interfaces'
import CategoryCard from 'components/CategoryCard'

interface Props {
  section: Section
  host: string
}

const MyComponent = (props: Props): React.ReactElement => {
  const { section, host } = props

  return (
    <>
      <Head>
        <title>{section.title}</title>
      </Head>

      <Typography variant="h1">{section.title}</Typography>

      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 1, md: 2, lg: 3 }}
      >

        {section.categories.map((category: Category) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <CategoryCard
              host={host}
              section={section}
              category={category}
            />
          </Grid>
        )) }
      </Grid>

    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: NextPageContext) {
  const { sectionSlug } = context.query

  const host = publicRuntimeConfig.API_URL

  const res = await fetch(`${host}/sections?slug=${sectionSlug}`)
  const filteredSections = await res.json()
  const section = filteredSections[0]
  return {
    props: { section, host },
  }
}

export default MyComponent
