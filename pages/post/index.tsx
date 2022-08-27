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

      <main>
        <h2>Post Page</h2>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>

        <style jsx>{`
          ul {
          }
          ul > li {
            color: red;
          }
        `}</style>
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
