// import React from 'react'
// import Image from 'next/image'

// export const getStaticProps = async ({ params, locale }) => {
//   const { slug } = params

//   const id = slug.match(/\d{3}/)[0] // fails, because slug is undefined

//   return {
//     props: { slug, id, locale },
//     revalidate: 1,
//   }
// }

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Slide, Button, } from '@material-ui/core'
import Link from 'next/link'

import { makeStyles, Theme } from '@material-ui/core/styles'

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
  button: {
    margin: theme.spacing(1),
    color: theme.palette.background.default
  },
  footer: {
    background: theme.palette.primary.main,
    padding: 20,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.background.default
  }
}))

const AppBarLayout = ({ children, ...props }: PropsLayout) => {
  const classes = useStyles()
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link
              href="/"
              passHref
            >
              <Button className={classes.button}>
                Home
              </Button>
            </Link>
            <Link
              href="/about"
              passHref
            >
              <Button className={classes.button}>
                About
              </Button>
            </Link>

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
