import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/getPosts';
// import theme from '../../styles/theme';

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}
interface id {
  id: string;
}
interface PostId {
  params: id;
}

interface staticPaths {
  paths: Array<PostId>;
  fallback: boolean;
}
interface staticPropsParams {
  id: string;
}
interface staticPropsArg {
  params: staticPropsParams;
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

export function getStaticPaths(): staticPaths {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(value: staticPropsArg): Promise<unknown> {
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
