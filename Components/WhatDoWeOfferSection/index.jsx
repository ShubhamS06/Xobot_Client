import React from "react";

function WhatDoWeOfferSection({ styles }) {
  return (
    <div className={styles.whatDoWeOfferSection}>
      <div className={styles.sectionHeader}>
        <b className={styles.sectionMainHeading}>What do we offer?</b>
        <div className={styles.sectionSubHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>

      <div className={styles.whatDoWeOfferCard}>
        <img
          className={styles.whatDoWeOfferCardImg}
          alt=""
          src="/group-43@2x.png"
        />
        <div className={styles.whatDoWeOfferCardInner}>
          <div className={styles.whatDoWeOfferCardTitleParent}>
            <div className={styles.whatDoWeOfferCardTitle}>Analytics</div>
          </div>
          <div className={styles.whatDoWeOfferCardBody}>
            <div className={styles.sectionHeader}>
              <b className={styles.sectionMainHeading}>Call Analytics data</b>
            </div>

            <div className={styles.whatDoWeOfferCardText}>
              Our software, with its intuitive dashboard, allows users to gain a
              comprehensive overview of their calls, from average duration to
              successful AI outcomes. As a leading provider, we harness the
              power of AI analytics to provide insights after every call,
              ensuring businesses can make data-driven decisions.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatDoWeOfferCard}>
        <div className={styles.whatDoWeOfferCardInner}>
          <div className={styles.whatDoWeOfferCardTitleParent}>
            <div className={styles.whatDoWeOfferCardTitle}>AGENTS</div>
          </div>
          <div className={styles.whatDoWeOfferCardBody}>
            <div className={styles.sectionHeader}>
              <b className={styles.sectionMainHeading}>Range of agents</b>
            </div>

            <div className={styles.whatDoWeOfferCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
        </div>
        <img
          className={styles.whatDoWeOfferCardImg}
          alt=""
          src="/group-431@2x.png"
        />
      </div>
      <div className={styles.whatDoWeOfferCard}>
        <img
          className={styles.whatDoWeOfferCardImg}
          alt=""
          src="/group-432@2x.png"
        />
        <div className={styles.whatDoWeOfferCardInner}>
          <div className={styles.whatDoWeOfferCardTitleParent}>
            <div className={styles.whatDoWeOfferCardTitle}>Testing</div>
          </div>
          <div className={styles.whatDoWeOfferCardBody}>
            <div className={styles.sectionHeader}>
              <b className={styles.sectionMainHeading}>Test on the go!</b>
            </div>

            <div className={styles.whatDoWeOfferCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDoWeOfferSection;
