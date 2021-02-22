import Head from 'next/head';
import { getSortedPostsData } from '../../lib/getPosts';
import styles from '../../styles/index.module.css';

interface StaticProps {
  props: AllPostsData;
}
interface AllPostsData {
  allPostsData: unknown;
}

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
        </div>

        <div>
          <p>
            コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1
            コンテンツ1 コンテンツ1 コンテンツ1コンテンツ1 コンテンツ1
            コンテンツ1 コンテンツ1 コンテンツ1 コンテンツ1 コンテンツ1
            コンテンツ1 コンテンツ1コンテンツ1コンテンツ1
            コンテンツ1コンテンツ1コンテンツ1
          </p>

          <p>
            コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2
            コンテンツ2コンテンツ2 コンテンツ2 コンテンツ2
            コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2
            コンテンツ2 コンテンツ2コンテンツ2 コンテンツ2 コンテンツ2
            コンテンツ2 コンテンツ2
          </p>
        </div>
      </main>
    </div>
  );
}

export function getStaticProps(): StaticProps {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
