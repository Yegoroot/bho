import useTranslation from 'next-translate/useTranslation'
import {
  Button, Box, Menu, Fade
} from '@mui/material'
import React from 'react'

import { Section } from 'src/interfaces'

interface Props {
  sections: Section[]
}

const MenuSections = (props: Props) :React.ReactElement => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { sections } = props
  console.log(sections, 'section')
  return (
    <Box sx={{
      marginLeft: 'auto'
    }}
    >

      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {t('menu:sections')}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            width: '68%',
            left: '30%',
            top: '60px'
          },
        }}

      >
        <Box sx={{ padding: '20px' }}>
          {sections.map((section) => (
            <span
              key={section.id}
              style={{ paddingRight: '20px' }}
            >
              {section.title}
            </span>
          ))}
        </Box>
      </Menu>

    </Box>
  )
}

export default MenuSections
