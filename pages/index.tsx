import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <style jsx>{`
        ul > li {
          color: blue;
        }
      `}</style>
    </div>
  );
};

export default Home;
