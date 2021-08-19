import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Slide, } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
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

const useStyles = makeStyles((theme: Theme) => ({
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

const AppBarLayout = ({ children, ...props }: PropsLayout): React.ReactElement => {
  const classes = useStyles()
  const { lang } = useTranslation()
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>

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
