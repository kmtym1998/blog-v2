import Head from 'next/head';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import styles from '../styles/index.module.css';
import Icons from '../components/Icons';

export default function Home(): JSX.Element {
  const tileData = [
    {
      img: 'img/IMG_0324.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
    {
      img: 'img/IMG_0610.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
    {
      img: 'img/IMG_0685.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
    {
      img: 'img/IMG_3165.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
    {
      img: 'img/IMG_3405.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
    {
      img: 'img/IMG_3959.jpeg',
      title: 'image1',
      author: 'author',
      cols: 2,
    },
  ];

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
          <p>1998年9月9日生まれ</p>
          <p>エンジニア</p>
        </div>

        <div className={styles['grid-list-container']}>
          <GridList cellHeight={160} className={styles['grid-list']} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </main>
    </div>
  );
}
