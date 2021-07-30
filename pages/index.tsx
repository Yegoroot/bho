import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { DESCRIPTION, MAIN_PAGE_TITLE } from '../constants'

export default function Home() {
  return (
    <div className={styles.container}>
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
          Welcome to
          {' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

      <footer className={styles.footer}>

        <span className={styles.logo}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </span>

      </footer>
    </div>
  )
}
