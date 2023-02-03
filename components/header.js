import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Image src="/img/logo.svg" width={300} height="40" alt="logo" />
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/about-us">Sobre Nós</Link>
          <Link href="/store">Loja</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
