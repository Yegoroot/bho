import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import {
  Typography, Tab, Box, Tabs, Grid
} from '@mui/material'

import { ArticleCard } from 'components/index'
import { Category, Section } from 'src/interfaces'

interface Props {
  category: Category
  section: Section
}

const MyComponent = (props: Props): React.ReactElement => {
  const { category, section } = props
  const [value, setValue] = React.useState(category.slug)
  const router = useRouter()

  const handleChange = (event: React.SyntheticEvent, categorySlug: string) => {
    event.preventDefault()
    setValue(categorySlug)
    router.push(`/sections/${section.slug}/${categorySlug}`)
  }

  return (
    <>
      <Head>
        <title>{category.section.title}</title>
      </Head>

      <Typography variant="h1">{category.section.title}</Typography>

      <Box sx={{ width: '100%', }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {section.categories.map((c) => (
              <Tab
                key={c.id}
                label={c.title}
                value={c.slug}
              />
            ))}

          </Tabs>
        </Box>

        <Box>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 5,
              borderLeft: 'solid',
              paddingLeft: 2,

            }}
          >
            {category.description}
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          rowSpacing={{ xs: 1, md: 2, lg: 3 }}
          columnSpacing={{ xs: 1, md: 2, lg: 3 }}
        >
          {category.articles.map((article) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
            >
              <ArticleCard
                url={`/sections/${section.slug}/${category.slug}/${article.slug}`}
                key={article.id}
                article={article}
              />
            </Grid>
          ))}

        </Grid>
      </Box>

    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: NextPageContext) {
  const { categorySlug, sectionSlug } = context.query

  const resCategory = await fetch(`${publicRuntimeConfig.API_URL}/categories?slug=${categorySlug}`)
  const filteredCategories = await resCategory.json()
  const resSection = await fetch(`${publicRuntimeConfig.API_URL}/sections?slug=${sectionSlug}`)
  const filteredSections = await resSection.json()
  const category = filteredCategories[0]
  const section = filteredSections[0]
  return {
    props: { category, section },
  }
}

export default MyComponent
