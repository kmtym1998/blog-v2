import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/getPosts';
// import theme from '../../styles/theme';

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}
interface Id {
  id: string;
}
interface PostId {
  params: Id;
}

interface StaticPaths {
  paths: Array<PostId>;
  fallback: boolean;
}
interface StaticPropsParams {
  id: string;
}
interface StaticPropsArg {
  params: StaticPropsParams;
  locales: string;
  locale: string;
  defaultLocale: string;
}
export default function Post(post: PostData): JSX.Element {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
}

export function getStaticPaths(): StaticPaths {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(value: StaticPropsArg): Promise<unknown> {
  const id: string = value.params.id;
  const postData: PostData = await getPostData(id);

  return {
    props: {
      id: postData.id,
      title: postData.title,
      date: postData.date,
      contentHtml: postData.contentHtml,
    },
  };
}
