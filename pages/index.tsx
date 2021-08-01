import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DESCRIPTION, MAIN_PAGE_TITLE } from '../constants'
import useTranslation from 'next-translate/useTranslation'

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

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t("common:title")}
        </h1>

      </main>

    </div>
  )
}
