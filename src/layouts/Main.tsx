/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import {
  Box, Theme, Slide, useTheme
} from '@mui/material'
import Image from 'next/image'

import { Menu, MenuSections } from 'src/components/index'
import { Section, General } from 'src/@types/interfaces'
import { MODE_THEME } from 'src/config'
import LogoDark from 'public/logo-dark.png'
import LogoLight from 'public/logo-light.png'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface PropsLayout {
  sections: Section[]
  general: General
  children: React.ReactElement;
}

const HEIGHT_APPHEADER = 30

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  )
}

const AppBarLayout = ({
  children, sections, ...props
}: PropsLayout): React.ReactElement => {
  const theme = useTheme<Theme>()
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    setShow(window.pageYOffset > HEIGHT_APPHEADER)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          // @ts-ignore
          sx={{
            boxShadow: !show && 'none',
            backgroundImage: !show && 'none',
            backgroundColor: (theme: Theme) => theme.palette.background.default,
          }}
          enableColorOnDark
        >
          <Toolbar>
            <Box
              component="span"
              sx={{
                transition: '0.3s',
                width: !show ? 200 : 150,
                padding: 2,
                paddingLeft: 0,
                marginRight: 2
              }}
            >
              <Image
                src={theme.palette.mode === MODE_THEME.DARK ? LogoDark : LogoLight}
                alt="logo"
              />
            </Box>
            <Menu />
            <MenuSections sections={sections} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container> */}
      <Box sx={{
        p: 3
      }}
      >
        {children}
      </Box>
      {/* </Container> */}
      {/* <Footer general={general} /> */}

    </>
  )
}

export default AppBarLayout
