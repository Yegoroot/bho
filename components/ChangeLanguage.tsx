import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Menu as MaterialMenu, Box, } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import Router from 'next/router'
import { DEFAULT_LANG, locales } from '../i18Constants'

const Menu = () => {
  const [currentLang, setCurrentLang] = useState(DEFAULT_LANG)

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
    <Box
      sx={{
        marginLeft: 'auto'
      }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        {currentLang}
      </Button>
      <MaterialMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {locales.map((locale) => (
          <MenuItem
            key={locale}
            onClick={() => setLang(locale)}
          >
            {locale.toLocaleUpperCase()}
          </MenuItem>
        ))}

      </MaterialMenu>
    </Box>
  )
}

export default Menu
