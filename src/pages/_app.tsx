import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../assets/scss/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lương Tuyên Quang - Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
