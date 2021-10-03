import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import { Slide } from '@mui/material'

import Image from 'next/image'

import MenuMain from 'components/MenuMain'
import Footer from 'components/Footer'
import MenuSections from 'components/MenuSections'
import { Section, General } from 'src/interfaces'

import LogoDark from 'public/logo-dark.png'

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
  children, sections, general, ...props
}: PropsLayout): React.ReactElement => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    setShow(window.pageYOffset > HEIGHT_APPHEADER)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const styles = !show ? {
    backgroundImage: 'none',
    boxShadow: 'none'
  } : {
    // backgroundImage: 'none',
  }

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          color="secondary"
          enableColorOnDark
          sx={styles}
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
                src={LogoDark}
                alt="logo"
              />
            </Box>
            <MenuMain />
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
      <Footer general={general} />

    </>
  )
}

export default AppBarLayout
