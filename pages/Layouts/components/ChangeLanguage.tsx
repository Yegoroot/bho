import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'

import Router from 'next/router'
import { DEFAULT_LANG, locales } from '../../../i18Constants'

function SimpleMenu() {
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
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        {currentLang}
      </Button>
      <Menu
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

      </Menu>
    </div>
  )
}

export default styled(SimpleMenu)`
margin-left: auto;
color: red !important;
`
