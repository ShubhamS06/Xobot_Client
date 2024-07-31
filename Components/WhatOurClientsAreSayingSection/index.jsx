import React, { useEffect, useRef, useState } from "react";

function WhatOurClientsAreSayingSection({ styles }) {
  const [activeCard, setActiveCard] = useState(1);
  const cardGroupRef = useRef();

  useEffect(() => {
    // scroll the element middle
    if (cardGroupRef.current) {
      cardGroupRef.current.scrollLeft = cardGroupRef.current.offsetWidth / 4;
    }
  }, []);

  function selectCard(index) {
    setActiveCard(index);
    if (document.body.offsetWidth > 450) {
      const w = cardGroupRef.current.offsetWidth;
      cardGroupRef.current.scrollLeft =
        index === 0 ? 0 : index == 1 ? w / 4 : w;
    }
  }

  const cards = [
    {
      title: "Great to generate leads",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua",
      userIcon: "/ellipse-69@2x.png",
      userName: "JOHN DOE",
      userAbout: "Founder and CEO of 10xTravel",
    },
    {
      title: "Self-Serve Customer Support",
      content:
        "Ever since implementing Xobot on our site, I've seen up to a 70% reduction of customer support queries in my inbox.”",
      userIcon: "/ellipse-69@2x.png",
      userName: "Bryce Conway",
      userAbout: "Founder and CEO of 10xTravel",
    },
    {
      title: "Amazing tool!",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  ut labore et dolore magna aliqua",
      userIcon: "/ellipse-691@2x.png",
      userName: "JOHN DOE",
      userAbout: "Founder and CEO of 10xTravel",
    },
  ];

  return (
    <div className={styles.whatOurClientsAreSayingSection}>
      <div className={styles.whatOurClientsAreSayingParent}>
        <b className={styles.sectionMainHeading}>What our clients are saying</b>
        <div className={styles.sectionSubHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>
      <div ref={cardGroupRef} className={styles.whatOurCardGroup}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => selectCard(index)}
            data-dir={index - activeCard}
            data-active={activeCard == index}
            className={styles.whatOurCard}
          >
            <div className={styles.whatOurClientCardBody}>
              <div className={styles.selfServeCustomerSupportParent}>
                <b
                  className={`${styles.sectionMainHeading} ${styles.whatOurCardTitle}`}
                >
                  {card.title}
                </b>
                <div className={styles.whatOurCardContent}>
                  {activeCard == index && card.content}
                </div>
              </div>
              <div className={styles.frameChild17} />
              <div className={styles.ellipseParent4}>
                <img
                  className={styles.frameChild18}
                  alt=""
                  src={card.userIcon}
                />
                <div className={styles.cardAuthornameParent}>
                  <div className={styles.cardAuthorname}>{card.userName}</div>
                  <div className={styles.cardAuthorAbout}>{card.userAbout}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatOurClientsAreSayingSection;
