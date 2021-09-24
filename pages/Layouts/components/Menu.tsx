import useTranslation from 'next-translate/useTranslation'
import { Button, } from '@material-ui/core'
import Link from 'next/link'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    color: theme.palette.background.default
  },
}))

const MainMenu = () :React.ReactElement => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (

    <>
      <Link
        href="/"
        passHref
      >
        <Button className={classes.button}>

          {t('menu:home')}
        </Button>
      </Link>
      <Link
        href="/about"
        passHref
      >
        <Button className={classes.button}>
          {t('menu:about')}
        </Button>
      </Link>
      {/* <Link
        href="/news"
        passHref
      >
        <Button className={classes.button}>
          News
        </Button>
      </Link>
      <Link
        href="/contacts"
        passHref
      >
        <Button className={classes.button}>
          Contacts
        </Button>
      </Link> */}

    </>
  )
}

export default MainMenu
