import styles from '../styles/components.module.css';

export default function appFooter(): JSX.Element {
  return (
    <footer className={styles['f-container']}>
      <hr className={styles['f-hr']} />
      <p>Thank you very much for coming!</p>
      <p>© 2020-2021 Ryohei KOMATSUYAMA, All Rights Reserved.</p>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles['f-logo']} />
      </a>
    </footer>
  );
}
