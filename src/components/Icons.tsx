import styles from '../styles/components.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles['icons-wrapper']}>
      <a
        href="https://www.facebook.com/profile.php?id=100010641977035"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/facebook.svg"
          alt="facebook"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>

      <a
        href="https://www.instagram.com/kmtym1998/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/instagram.svg"
          alt="instagram"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>

      <a
        href="https://twitter.com/kmtym1998/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/twitter.svg"
          alt="twitter"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>

      <a
        href="https://www.youtube.com/channel/UC8hkMT_i01sJm1lYKGijQfQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/youtube.svg"
          alt="instagram"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>

      <a
        href="https://github.com/kmtym1998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/github.svg"
          alt="github"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>

      <a
        href="spotify:user:kmtrh1998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/spotify.svg"
          alt="spotify"
          width="30px"
          height="auto"
          className={styles['social-icon']}
        />
      </a>
    </div>
  );
}
