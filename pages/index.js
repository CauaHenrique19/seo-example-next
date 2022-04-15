import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AleatShop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="compras, shop, aleatshop" />
        <meta name="description" content="Loja Online de Itens aleatórios" />
        <meta name="og:title" content="AleatShop" />
        <meta property="og:url" content="https://www.aleatshop.com.br" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>AleatShop</h1>
      </main>
    </div>
  )
}
