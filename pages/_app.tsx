import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import Head from 'next/head';
import Seo from '../components/common/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo
        title='Fall-Vacation'
        keywords={['농사', '농장', '취미농사']}
        descrption='이 앱은 취미농사를 찾는 사람들을 위한 앱입니다'
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
