import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { DEFAULT_LANG } from '../../../constants'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    color: theme.palette.background.default
  },
}))

export default function Auth() {
  const { t } = useTranslation()
  const classes = useStyles()

  const [isLogined, setSetIsLogined] = useState(false);

  useEffect(() => {
    let isLogin = JSON.parse(localStorage.getItem('login'))

    setSetIsLogined(isLogin)
  });

  const logUot = () => {
    localStorage.setItem('login', 'false')
  }

  return (
    <> {
      isLogined ? <Link
        href="/"
        passHref
      >
        <Button onClick={logUot} className={classes.button}>

          {t('common:logout')}
        </Button>
      </Link> : <Link
        href="/auth"
        passHref
      >
        <Button className={classes.button}>

          {t('common:auth')}
        </Button>
      </Link>
}
    </>
  )
}
