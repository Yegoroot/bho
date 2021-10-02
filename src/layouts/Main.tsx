import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Slide } from '@mui/material'

import MainMenu from '../components/Menu'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface PropsLayout {
  children: React.ReactElement;
}

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

const AppBarLayout = ({ children, ...props }: PropsLayout): React.ReactElement => (
  <>
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>

          <MainMenu />

        </Toolbar>
      </AppBar>
    </HideOnScroll>
    <Toolbar />
    <Container>
      <Box my={2}>
        {children}
      </Box>
    </Container>
    <div>
      <ul>
        <li>---</li>
        <li>---</li>
        <li>---</li>
      </ul>
    </div>
  </>
)

export default AppBarLayout
