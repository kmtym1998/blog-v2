import Head from 'next/head';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from '../styles/index.module.css';
import Icons from '../components/Icons';

export default function Home(): JSX.Element {
  const tileData = [
    {
      img: 'img/IMG_0324.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: true,
    },
    {
      img: 'img/IMG_0610.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: false,
    },
    {
      img: 'img/IMG_0685.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: false,
    },
    {
      img: 'img/IMG_3165.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: true,
    },
    {
      img: 'img/IMG_3405.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: false,
    },
    {
      img: 'img/IMG_3959.jpeg',
      title: 'image1',
      author: 'author',
      cols: 1,
      featured: false,
    },
  ];

  return (
    <div>
      <Head>
        <title>Ryohei KOMATSUYAMA</title>
        <link rel="icon" href="/favicon.ico" />
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
          <p>1998年9月9日生まれ</p>
          <p>エンジニア</p>
        </div>

        <CssBaseline />
        <Container
          maxWidth="xs"
          fixed
          classes={{ maxWidthXs: '1000px' }}
          className={styles['grid-list-container']}
        >
          {/* breakpointごとにグリッドの表示の比率を変える */}
          <GridList cellHeight={200} spacing={1}>
            {tileData.map((tile) => (
              <GridListTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} titlePosition="bottom" />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </main>
    </div>
  );
}
