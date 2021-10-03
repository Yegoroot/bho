import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { Category } from 'src/interfaces'

interface Props {
  category: Category
}

const CategoryCard = (props: Props) :React.ReactElement => {
  const { category } = props
  console.log(category, 'category')

  return (
    <>

      <Link
        href="/about"
        passHref
      >
        <Button color="primary">
          {category.title}
        </Button>
      </Link>
    </>
  )
}

export default CategoryCard
