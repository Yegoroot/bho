import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Slide } from '@mui/material'

import MenuMain from 'components/MenuMain'
import MenuSections from 'components/MenuSections'
import { Section } from 'src/interfaces'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface PropsLayout {
  sections: Section[]
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

const AppBarLayout = ({ children, sections, ...props }: PropsLayout): React.ReactElement => (
  <>
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <MenuMain />
          <MenuSections sections={sections} />
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
