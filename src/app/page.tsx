import Head from 'next/head'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Deviators Club</title>
        <meta name="description" content="Where Code Breaks Free and Innovation Reigns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  )
}