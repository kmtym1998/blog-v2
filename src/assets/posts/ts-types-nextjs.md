---
title: '[TypeScript] Next独自の型'
date: '2021/02/22'
---

# SSG とか SSR のとき

```tsx
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};
```

# API ルート

```bash
import { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // ...
}
```

`Data`の指定は任意

# `_app.tsx`で使うやつ

`_app.js`→`_app.tsx`

```tsx
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
```
