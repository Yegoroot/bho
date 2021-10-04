import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { Category, Section } from 'src/interfaces'

interface Props {
  category: Category
  section: Section
}

const CategoryCard = (props: Props) :React.ReactElement => {
  const { category, section } = props
  // console.log(category, 'category')

  return (
    <>

      <Link
        href="/sections/[sectionSlug]/[categorySlug]"
        as={`/sections/${section.slug}/${category.slug}`}
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
