import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import { MAIN_PAGE_TITLE, DESCRIPTION, KEYWORDS } from '../constants'

export default function About(): React.ReactElement {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{MAIN_PAGE_TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta
          name="keywords"
          content={KEYWORDS}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <h1>
          {t('common:about')}
        </h1>

      </main>

    </>
  )
}
