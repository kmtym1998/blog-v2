interface TileData {
  img: string;
  title: string;
  cols: number;
  rows: number;
}

const tileData: Array<TileData> = [
  {
    img: 'img/IMG_0324.jpeg',
    title: 'アムステルダム',
    cols: 100,
    rows: 2.5,
  },
  {
    img: 'img/IMG_0610.jpeg',
    title: 'ストックホルム',
    cols: 50,
    rows: 1,
  },
  {
    img: 'img/IMG_3959.jpeg',
    title: '清水寺',
    cols: 50,
    rows: 1,
  },
  {
    img: 'img/IMG_0685.jpeg',
    title: 'Spotify本社',
    cols: 100,
    rows: 1.3,
  },
  {
    img: 'img/IMG_3165.jpeg',
    title: 'チバフォルニアでの青春',
    cols: 100,
    rows: 1.3,
  },
  {
    img: 'img/IMG_3405.jpeg',
    title: 'シーパラのフラミンゴ',
    cols: 100,
    rows: 1,
  },
];

export default tileData;
