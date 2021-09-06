import React, { useState } from 'react'
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

  return (
    <>
      <Link
        href="/auth"
        passHref
      >
        <Button className={classes.button}>

          {t('common:auth')}
        </Button>
      </Link>
    </>
  )
}
