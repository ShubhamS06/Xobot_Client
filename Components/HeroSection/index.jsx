import React, { useState } from "react";
import heroStyles from "./hero.module.css";
import Card from "./card";
import TypingAnnimatText from "../../Common/TypingAnnimatText";

export default function HeroSection({ styles }) {
  const BOT_IDS = `${process.env.NEXT_PUBLIC_BOT_IDS}`;
  const heroIds = BOT_IDS.split(',').filter(x => x !== '');
  const heroTitles = [
    "sales lead agent",
    "schedule appointment agent",
    "faq agent",
    "collect missing information agent"
  ];
  const [suffleText, setsuffleText] = useState(heroTitles[0]);
  const [suffleId, setsuffleId] = useState(heroIds[0]);
  const onSuffleClick = () => {
    const randomIndex = Math.floor(Math.random() * heroTitles.length);
    setsuffleText(heroTitles[randomIndex]);
    const randomIdIndex = Math.floor(Math.random() * heroIds.length);
    setsuffleId(heroIds[randomIdIndex]);
  };
  return (
    <div className={heroStyles.heroSectionParent}>
      <div className={heroStyles.topHeading}>
        <div className={heroStyles.welcomeToXobot}>Welcome to XOBOT</div>
        <b className={heroStyles.subheading}>
          Let us do the TALKING! see your revenue soar
        </b>
      </div>
      <div className={heroStyles.heroSection}>
        <div className={heroStyles.flipTextRoot}>
          <span>You can talk with </span>
          <span className={heroStyles.flipTextGroup}>
            <TypingAnnimatText textArray={heroTitles} period={2200} />
          </span>
          |
        </div>

        <img className={styles.heroStars} src="/hero-stars.svg" alt="" />
        <img className={styles.heroStars2} src="/hero-stars.svg" alt="" />

        <div className={heroStyles.container}>
          <div className={heroStyles.cardGroup}>
            <button
              className={`${styles.heroButton} ${styles.getStartedFor}`}
              onClick={() => onSuffleClick()}
            >
              <img src="/shuffleIcon.svg" alt="shuffleIcon" /> Shuffle
            </button>
            <Card id={suffleId} title={suffleText} styles={heroStyles} />
            <div className={heroStyles.selectWrapper}>
              <select
                className={`${styles.heroButton} ${styles.getStartedFor}`}
              >
                <option value="English">English</option>
                <option value="English">French</option>
                <option value="English">Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
