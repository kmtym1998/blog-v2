import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function History(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>history</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
