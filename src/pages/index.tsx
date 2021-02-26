import Head from "next/head";
import React from "react";

import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import ExperienceBar from "../components/ExperienceBar";
import CompletedChallenges from "../components/CompletedChallenges";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
