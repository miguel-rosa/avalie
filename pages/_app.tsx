import '../styles/globals.css'
import '../styles/theme.css'
import '../styles/tachyons.css'
import '../styles/animations.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>Avalie: Chega de não receber feedbacks!</title>
    <meta name="description" content="Bora mudar junto o futuro dos processos seletivos" />
    <link rel="icon" href="/favicon-avalie.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
