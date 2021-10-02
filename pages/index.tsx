/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Typography } from '@mui/material'
import fetch from 'isomorphic-unfetch'

import OurServices from 'components/OurServices'
import { BaseProps, Section } from 'src/interfaces'
import { DESCRIPTION, MAIN_PAGE_TITLE } from '../constants'
import homeImage from '../public/images/home.png'

interface Props extends BaseProps {
  sections: Section[]
}

export default function Home(props: Props) {
  const { t } = useTranslation()
  const { sections, __lang, __namespaces } = props

  console.log('props', sections, __lang, __namespaces)
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

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/sections`)
  const sections: Section[] = await res.json()

  return {
    props: {
      sections
    },
  }
}
