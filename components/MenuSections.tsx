import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { Section } from 'src/interfaces'

interface Props {
  sections: Section[]
}

const MenuSections = (props: Props) :React.ReactElement => {
  const { t } = useTranslation()

  const { sections } = props
  console.log(sections)
  return (
    <>
      <Link
        href="/"
        passHref
      >
        <Button color="primary">

          {t('menu:home')}
        </Button>
      </Link>
      <Link
        href="/about"
        passHref
      >
        <Button color="primary">
          {t('menu:about')}
        </Button>
      </Link>
    </>
  )
}

export default MenuSections
