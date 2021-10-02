import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MainMenu = () :React.ReactElement => {
  const { t } = useTranslation()

  return (
    <>
      <Link
        href="/"
        passHref
      >
        <Button
          color="primary"
          style={{ marginRight: '16px' }}
        >

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

export default MainMenu