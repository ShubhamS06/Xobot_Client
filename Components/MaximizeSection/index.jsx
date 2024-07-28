import React from "react";
import compStyles from "./maximize.module.css";

function MaximizeSection({ styles }) {
  return (
    <div className={compStyles.maximizeSection}>
      <img
        className={compStyles.maximizeHeroStars}
        src="/hero-stars.svg"
        alt=""
      />
      <img
        className={compStyles.maximizeHeroStars2}
        src="/hero-stars.svg"
        alt=""
      />

      <div className={compStyles.maximizeSectionChild} />
      <div className={compStyles.frameParent5}>
        <div className={compStyles.maximizeYourSupportCapacityParent}>
          <b className={compStyles.maximizeYourSupport}>
            Maximize your support capacity without extra hiring
          </b>
          <div className={compStyles.spend5Minutes}>
            Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to
            help you engage and retain more users and boost conversions.
          </div>
        </div>
        <div className={compStyles.frameParent}>
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
          {/* <div className={styles.buttonInner}>
                        <div className={styles.vectorParent}>
                            <img
                                className={styles.frameChild}
                                alt=""
                                src="/polygon-2.svg"
                            />
                            <div className={styles.getStartedFor}>Watch Video</div>
                        </div>
                    </div> */}
        </div>
        {/* <img className={compStyles.unionIcon8} alt="" src="/union3.svg" />
                <img className={compStyles.unionIcon8} alt="" src="/union3.svg" /> */}
      </div>
    </div>
  );
}

export default MaximizeSection;
