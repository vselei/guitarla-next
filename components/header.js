import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/">
          <Image src="/img/logo.svg" width={300} height="40" alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          <Link
            className={router.pathname === '/' ? styles.active : ''}
            href="/"
          >
            Home
          </Link>
          <Link
            className={router.pathname === '/about-us' ? styles.active : ''}
            href="/about-us"
          >
            Sobre Nós
          </Link>
          <Link
            className={router.pathname === '/store' ? styles.active : ''}
            href="/store"
          >
            Loja
          </Link>
          <Link
            className={router.pathname === '/blog' ? styles.active : ''}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={router.pathname === '/cart' ? styles.active : ''}
            href="/cart"
          >
            <Image width={30} height={25} src="/img/cart.png" alt='carrinho' />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
