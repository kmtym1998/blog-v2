import Head from 'next/head';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';

import styles from '../styles/index.module.css';
import Icons from '../components/Icons';

import tileData from '../lib/tileData';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Ryohei KOMATSUYAMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="t-center">
          <img src="/flamingo.jpg" alt="" className={styles['img-profile']} />
          <p className="t-center t-bold">Ryohei KOMATSUYAMA</p>
        </div>

        <div className="t-center">
          <p>1998年9月9日生まれ</p>
          <p>エンジニア1年目</p>
        </div>

        <Icons></Icons>

        <div className="g-spacer"></div>

        <Container maxWidth="xs" fixed>
          {/* TODO: breakpointごとにグリッドの表示の比率を変える */}
          <GridList cellHeight={160} spacing={1} cols={100}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows}>
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
