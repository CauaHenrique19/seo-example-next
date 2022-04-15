import Head from 'next/head'

import styles from '../../styles/Home.module.css'

export default function Media({ mediaId, title }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title} - Mosegook</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="mosegook, filmes, livros, jogos, series, filme, livro, jogo, serie" />
                <meta property="og:url" content="https://www.mosegook.com.br" />
                <meta name="description" content={`Saiba mais sobre ${title}`} />
                <meta name="og:title" content={`${title} - Mosegook`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>{title}</h1>
                <p>Media ID: {mediaId}</p>
            </main>
        </div>
    )
}

export async function getStaticProps({ params = {} } = {}){
    return {
        props: {
            mediaId: params.mediaId,
            title: `Media ${params.mediaId}`
        }
    }
}

export async function getStaticPaths(){
    const paths = [...new Array(5)].map((i, index) => {
        return {
            params: {
                mediaId: `${index + 1}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}