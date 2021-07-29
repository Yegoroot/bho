import Head from 'next/head'

const keywords = "asdasda asd asd asd asd asd" // FIXME
const description = "descriptiondescriptiondescriptiondescription" //FIXME

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        
    </>
  )
}
