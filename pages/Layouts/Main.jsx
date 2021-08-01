import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import getT from 'next-translate/getT'



export default function Main({ children }) {
  return (
    <div id="test">
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </header>

      <div>
        {children}
      </div>

      <footer>

        <span>
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

export const getStaticProps = async ({ params, locale }) => {
  const { slug } = params;

  const id = slug.match(/\d{3}/)[0]; // fails, because slug is undefined

  return {
    props: { slug, id, locale },
    revalidate: 1,
  };
};
