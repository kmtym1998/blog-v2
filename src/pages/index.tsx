import Head from 'next/head';
import Icons from '../components/Icons';
import styles from '../styles/index.module.css';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Ryohei KOMATSUYAMA</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <main className={styles.main}>
        <div>
          <img src="/flamingo.jpg" alt="" className={styles['img-profile']} />
          <p className={`${styles['t-center']} ${styles['t-bold']}`}>
            Ryohei KOMATSUYAMA
          </p>
          <Icons></Icons>
        </div>

        <div>
          <p>小松山凌平のサイト</p>
        </div>
      </main>
    </div>
  );
}
