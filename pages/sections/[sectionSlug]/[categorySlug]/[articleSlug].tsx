import React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { Typography, Box } from '@mui/material'

import { Article as IArticle } from 'src/interfaces'

interface Props {
  article: IArticle

}

const Article = (props: Props): React.ReactElement => {
  const { article } = props

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>

      <Typography variant="h1">{article.title}</Typography>

      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="h6"
        >
          {article.description}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{ marginBottom: 3 }}
        >
          {article.text}
        </Typography>
      </Box>

    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: NextPageContext) {
  const { articleSlug } = context.query

  const resArticles = await fetch(`${publicRuntimeConfig.API_URL}/articles?slug=${articleSlug}`)
  const filteredCategories = await resArticles.json()
  const article = filteredCategories[0]

  return {
    props: { article },
  }
}

export default Article
