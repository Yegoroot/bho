import useTranslation from 'next-translate/useTranslation'
import {
  Button, Box, Menu, Fade, MenuItem
} from '@mui/material'
import React from 'react'
import Link from 'next/link'

import { Section } from 'src/interfaces'

interface Props {
  sections: Section[]
}

const MenuSections = (props: Props) :React.ReactElement => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
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
            // width: '68%',
            // left: '30%',
            // top: '60px'
          },
        }}

      >
        <Box sx={{ padding: '20px' }}>
          {sections.map((section) => (
            <Link
              href="/sections/[sectionSlug]"
              as={`/sections/${section.slug}`}
              passHref
              key={section.id}
            >
              <MenuItem
                onClick={handleClose}
                key={section.id}
              >
                {section.title}
              </MenuItem>
            </Link>
          ))}
        </Box>
      </Menu>

    </Box>
  )
}

export default MenuSections
