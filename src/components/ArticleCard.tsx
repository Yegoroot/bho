import {
  CardContent, Typography, Card,
  CardActionArea
} from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

import { Article } from 'src/@types/interfaces'

interface Props {
  article: Article
  url: string
}

export const ArticleCard = (props: Props) :React.ReactElement => {
  const { article, url } = props
  const router = useRouter()

  const onClick = () => {
    router.push(url)
  }

  return (

    <Card>
      <CardActionArea
        onClick={onClick}
        sx={{ padding: 3 }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  )
}

export default ArticleCard
