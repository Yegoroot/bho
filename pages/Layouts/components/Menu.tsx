import useTranslation from 'next-translate/useTranslation'
import { Button, } from '@material-ui/core'
import Link from 'next/link'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React, { useEffect, useState} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
    color: theme.palette.background.default
  },
}))

const MainMenu = () :React.ReactElement => {
  const { t } = useTranslation()
  const classes = useStyles()

  const [isLogined, setSetIsLogined] = useState(false);
  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log(111)
      let isLogin = JSON.parse(localStorage.getItem('login'))

      setSetIsLogined(isLogin)
    });
  });
  return (

    <>
      <Link
        href="/"
        passHref
      >
        <Button className={classes.button}>

          {t('common:home')}
        </Button>
      </Link>
      <Link
        href="/about"
        passHref
      >
        <Button className={classes.button}>
          {t('common:about')}
        </Button>
      </Link>
      <Link
        href="/news"
        passHref
      >
        <Button className={classes.button}>
          {t('common:news')}
        </Button>
      </Link>
      <Link
        href="/contacts"
        passHref
      >
        <Button className={classes.button}>
          {t('common:contacts')}
        </Button>
      </Link>
      {
        !isLogined || <Link
          href="/admin"
          passHref
        >
          <Button className={classes.button}>
            {t('common:admin_room')}
          </Button>
        </Link>
      }
    </>
  )
}

export default MainMenu
