import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Router from 'next/router'
import { DEFAULT_LANG } from '../../../constants'

export default function SimpleMenu() {
  const useStyles = makeStyles((theme: Theme) => ({
    btn: {
      color: theme.palette.background.default
    },
  }))

  const [currentLang, setCurrentLang] = useState(DEFAULT_LANG)

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const setLang = (locale: string) => {
    setCurrentLang(locale)
    handleClose()
    Router.push('/', undefined, { locale })
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.btn}
      >
        {currentLang}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setLang('ar')}>AR</MenuItem>
        <MenuItem onClick={() => setLang('en')}>EN</MenuItem>
      </Menu>
    </>
  )
}
