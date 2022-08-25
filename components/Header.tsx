import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <a className={router.pathname === '/' ? styles.active : ''}>home</a>
        </Link>
        <Link href={'/post'}>
          <a className={router.pathname === '/post' ? styles.active : ''}>
            post
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
