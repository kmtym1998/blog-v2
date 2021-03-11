import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function History(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryohei KOMATSUYAMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Ryohei KOMATSUYAMA</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
