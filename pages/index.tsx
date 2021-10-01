import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Typography } from '@mui/material'
import OurServices from './components/MainPage/OurServices'
import { DESCRIPTION, MAIN_PAGE_TITLE } from '../constants'
import homeImage from '../public/images/home.png'

export default function Home() {
  const { t } = useTranslation()

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

      <main>

        <div>

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
        </div>
        <OurServices />

      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  console.log('api', API_URL)
  return {
    props: {}, // will be passed to the page component as props
  }
}
