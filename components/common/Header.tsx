import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Wrap from './Wrap';

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <Wrap>
          <nav>
            <Link href={'/'}>
              <a className={router.pathname === '/' ? 'active' : ''}>home</a>
            </Link>
            <Link href={'/post'}>
              <a className={router.pathname === '/post' ? 'active' : ''}>
                post
              </a>
            </Link>
          </nav>
        </Wrap>
      </header>

      <style jsx>{`
        header {
          background-color: #35a71e;
          color: white;
        }

        nav {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: black;
        }

        .active {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Header;
