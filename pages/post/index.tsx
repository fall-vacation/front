import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Post = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Post Page</title>
      </Head>

      <Header />

      <main>
        <h2>Post Page</h2>
        <ul>
          {posts?.map((post: any, index: number) => {
            return <div key={index}>{post.id}</div>;
          })}
        </ul>
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default Post;
