// import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Slide, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import MainMenu from './components/Menu'
import ChangeLanguage from './components/ChangeLanguage'

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

const AppBarLayout = ({ children, ...props }: PropsLayout): React.ReactElement => {
  const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
      background: theme.palette.primary.main,
    },
    footer: {
      background: theme.palette.primary.main,
      padding: 20,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.background.default
    },
    changeLanguage: {
      marginLeft: 'auto'
    }
  }))
  const classes = useStyles()
  // const { lang } = useTranslation()
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>

            <MainMenu />
            <div className={classes.changeLanguage}>
              <ChangeLanguage />
            </div>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          {children}
        </Box>
      </Container>
      <div className={classes.footer}>
        <ul>
          <li>---</li>
          <li>---</li>
          <li>---</li>
        </ul>
      </div>
    </>
  )
}

export default AppBarLayout
