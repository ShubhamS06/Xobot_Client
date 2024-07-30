import React from "react";
import compStyles from "./TrustedSection.module.css";

function TrustedSection({ styles }) {
  const companies = [
    { logo: "/Group 29.svg" },
    { logo: "/Group 30.svg" },
    { logo: "/Group 31.svg" },
    { logo: "/Group 32.svg" },
    { logo: "/Group 33.svg" },
    { logo: "/Group 34.svg" },

    { logo: "/Group 35.svg" },
    { logo: "/Group 36.svg" },
    { logo: "/Group 37.svg" },
    { logo: "/Group 38.svg" },
    { logo: "/Group 39.svg" },
    { logo: "/Group 40.svg" },
  ];

  const setupCardData = [
    { icon: "/target.svg", step: 1, text: "Choose goal for your agent" },
    { icon: "/plugsconnected.svg", step: 2, text: "Connect to your CRM" },
    { icon: "/usercircleplus.svg", step: 3, text: "Add phone numbers" },
    { icon: "/rocketlaunch.svg", step: 4, text: "Test & deploy" },
  ];

  return (
    <div className={styles.trustedSection}>
      <div className={styles.frameParent8}>
        <div className={styles.trustedBy100BusinessesParent}>
          <b className={styles.sectionMainHeading}>
            Trusted by 100+ businesses
          </b>
          <div className={compStyles.companyLogoGroup}>
            {companies.map((company, index) => (
              <div
                key={company.logo}
                data-row={companies.length / 2 <= index ? 2 : 1}
                data-first={companies.length / 2 == index}
                className={compStyles.companyLogo}
              >
                <img alt="" src={company.logo} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.frameParent9}>
          <b className={styles.sectionMainHeading}>5 minute set-up process</b>
          <div className={styles.sectionSubHeading}>
            Within a Couple of Steps your AI Voice Bot is ready to be used.
          </div>

          <div className={compStyles.stepCardGroup}>
            {setupCardData.map((card, index) => (
              <div key={index} className={compStyles.setupCard}>
                <div className={compStyles.background}>
                  <div className={compStyles.backgroundChild} />
                  <div className={compStyles.backgroundItem} />
                  <div className={compStyles.backgroundInner} />
                </div>
                <div className={compStyles.setupCardIcon}>
                  <img src={card.icon} alt="" />
                </div>
                <div className={compStyles.setupCardContent}>
                  <div className={compStyles.setupCardStep}>
                    STEP {index + 1}
                  </div>
                  <div className={compStyles.setupCardText}>{card.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <button
              className={`${styles.getStartedForFreeWrapper} ${styles.getStartedFor}`}
            >
              Get started for free
            </button>
            <button
              className={`${styles.getStartedForFreeWrapper} ${styles.vectorParent}`}
            >
              <img className={styles.frameChild} alt="" src="/polygon-2.svg" />{" "}
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedSection;
