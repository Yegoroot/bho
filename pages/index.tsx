import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { makeStyles, Theme } from '@material-ui/core/styles'
// import styles from '../styles/Home.module.css'
import { Typography } from '@material-ui/core'
import { DESCRIPTION, MAIN_PAGE_TITLE } from '../constants'
import homeImage from '../public/images/home.png'

const useStyles = makeStyles((theme: Theme) => ({

  main: {
    display: 'flex',
    marginTop: '10%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },

}))

export default function Home() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>{MAIN_PAGE_TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className={classes.main}>

        <div>
          <Typography variant="h1">
            {t('common:title')}
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore distinctio rerum necessitatibus itaque tempore harum quidem quos culpa!
            Odit aut accusamus at cum molestias saepe sint placeat natus omnis eos.
          </Typography>
        </div>

        <Image
          src={homeImage}
          alt={MAIN_PAGE_TITLE}
        />

      </main>

    </div>
  )
}
