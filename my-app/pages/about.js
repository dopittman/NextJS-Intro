import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="About" content="Further information about the application." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About</h1>

        </div>
    )
}