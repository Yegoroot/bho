import {
  CardContent, Typography, CardMedia, Card,
  CardActionArea
} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

import { Category, Section } from 'src/interfaces'

interface Props {
  category: Category
  section: Section
  host: string
}

export const CategoryCard = (props: Props) :React.ReactElement => {
  const { category, section, host } = props
  const router = useRouter()

  const onClick = () => {
    router.push(`/sections/${section.slug}/${category.slug}`)
  }

  return (

    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="170"
          image={`${host}${category.image.url}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {category.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {category.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  )
}

export default CategoryCard
