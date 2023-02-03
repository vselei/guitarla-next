import Link from 'next/link';

import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/about-us">Sobre Nós</Link>
          <Link href="/store">Loja</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <p className={styles.copyright}>
          Todos os direitos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
