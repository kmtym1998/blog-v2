import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/getPosts';
import styles from '../../styles/index.module.css';

interface StaticProps {
  props: AllProps;
}
interface AllProps {
  allPostsData: Array<PostData>;
}
interface PostData {
  id: string;
  title: string;
  date: string;
}

export default function Home(props: AllProps): JSX.Element {
  const allPostsData = props.allPostsData;
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <main className={styles.main}>
        <ul>
          {allPostsData.map(({ id, date, title }: PostData) => (
            <li key={id}>
              <Link href={'/posts/' + id}>{title}</Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export function getStaticProps(): StaticProps {
  return {
    props: {
      allPostsData: getSortedPostsData(),
    },
  };
}
