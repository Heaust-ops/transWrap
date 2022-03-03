/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FlexWrap from "../Components/FlexWrap";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexWrap>
        <img
          draggable={false}
          className={styles.image}
          src="/test.png"
          alt="asd"
        />
      </FlexWrap>
    </div>
  );
};

export default Home;
