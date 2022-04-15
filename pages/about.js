import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sobre - Mosegook</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="mosegook, filmes, livros, jogos, series, filme, livro, jogo, serie" />
                <meta property="og:url" content="https://www.mosegook.com.br" />
                <meta name="description" content="Não consegue encontrar um filme, jogo, série ou livro para consumir? Deixa que a gente te ajuda" />
                <meta name="og:title" content="Sobre - Mosegook" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Sobre Mosegook</h1>
            </main>
        </div>
    )
}