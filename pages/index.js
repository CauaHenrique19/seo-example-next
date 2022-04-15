import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mosegook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="mosegook, filmes, livros, jogos, series, filme, livro, jogo, serie" />
        <meta name="description" content="Não consegue encontrar um filme, jogo, série ou livro para consumir? Deixa que a gente te ajuda" />
        <meta name="og:title" content="Mosegook" />
        <meta property="og:url" content="https://www.mosegook.com.br" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
