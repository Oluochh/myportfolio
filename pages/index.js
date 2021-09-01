import Head from 'next/head'
import Nav from '../pages/components/nav'
import Hero from '../pages/components/hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Gillian</title>
      </Head>
      <Nav/>
      <Hero/>
    </div>
  )
}

