import React from 'react'
import heroStyles from "./hero.module.css";
import Card from "./card";
import TypingAnnimatText from "../../Common/TypingAnnimatText";

export default function HeroSection({ styles }) {

    const heroTitles = [
        "schedule appointment agent",
        "faq agent",
        "collect missing information agent",
    ]

    return (
        <div className={heroStyles.heroSectionParent}>


            <div className={heroStyles.topHeading}>
                <div className={heroStyles.welcomeToXobot}>Welcome to XOBOT</div>
                <b className={heroStyles.subheading}>
                    Let us do the TALKING! while you focus on your business
                </b>
            </div>

            <div className={heroStyles.heroSection}>

                <div className={heroStyles.flipTextRoot}>
                   <span> You can talk with </span>
                    <span className={heroStyles.flipTextGroup}> <TypingAnnimatText textArray={heroTitles} period={2000} />
                    </span>
                </div>

                <img className={styles.heroStars} src="/hero-stars.svg" alt="" />
                <img className={styles.heroStars2} src="/hero-stars.svg" alt="" />


                <div className={heroStyles.container}>
                    <select className={`${styles.englishParent} ${styles.getStartedFor}`}>
                        <option value="English">English</option>
                        <option value="English">Hindi</option>
                        <option value="English">Chinies</option>
                    </select>
                    <div className={heroStyles.cardGroup}>

                        <Card title={"sales lead agent"} styles={heroStyles} />

                    </div>
                    <select className={`${styles.englishParent} ${styles.getStartedFor}`}>
                        <option value="English">Suffle</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
