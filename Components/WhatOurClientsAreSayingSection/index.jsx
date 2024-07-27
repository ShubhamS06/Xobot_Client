import React, { useState } from 'react'

function WhatOurClientsAreSayingSection({ styles }) {

    const [activeCard, setActiveCard] = useState(1)

    const cards = [
        { title: "Amazing tool!", content: "", userIcon: "/ellipse-691@2x.png", userName: "JOHN DOE", userAbout: "Founder and CEO of 10xTravel" },
        { title: "Self-Serve Customer Support", content: "Ever since implementing Xobot on our site, I've seen up to a 70% reduction of customer support queries in my inbox.\”", userIcon: "/ellipse-69@2x.png", userName: "Bryce Conway", userAbout: "Founder and CEO of 10xTravel" },
        { title: "Great to generate leads", content: "", userIcon: "/ellipse-69@2x.png", userName: "JOHN DOE", userAbout: "Founder and CEO of 10xTravel" },
    ]

    return (
        <div className={styles.whatOurClientsAreSayingRoot}>
            <div className={styles.whatOurClientsAreSayingParent}>
                <b className={styles.sectionMainHeading}>What our clients are saying</b>
                <div className={styles.withinACouple}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                </div>
            </div>
            <div className={styles.whatOurCardGroup}>
                {cards/* .slice(0, 1) */.map((card, index) => (
                    <div key={index} onClick={() => setActiveCard(index)} data-dir={activeCard == index ? '' : (activeCard > index ? 'left' : 'right')} data-active={activeCard == index} className={styles.whatOurCard}>
                        <img
                            className={styles.backgroundIcon}
                            alt=""
                            src={activeCard == index ? "/background@2x.png" : "/background1@2x.png"}
                        />
                        <div className={styles.frameParent24}>
                            <div className={styles.selfServeCustomerSupportParent}>
                                <b className={`${styles.sectionMainHeading} ${styles.whatOurCardTitle}`}>
                                    {card.title}
                                </b>
                                <div className={styles.everSinceImplementing}>
                                    {card.content}
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
                                    <div className={styles.cardAuthorAbout}>
                                        {card.userAbout}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
            {/* <div className={styles.selfServeSection}>
                <div className={styles.frameParent21}>
                    <div className={styles.frameParent22}>
                        <div className={styles.streamlineYourSalesProcessParent}>
                            <b className={styles.streamlineYourSales}>
                                Streamline your sales process
                            </b>
                            <div className={styles.transformYourLead}>
                                Transform your lead management by having Xobot  immediately
                                respond to inquiries, qualify your leads, and book demos for
                                your sales team, all whilst integrating with your CRM.
                            </div>
                        </div>
                        <img
                            className={styles.conversionRateOptimizationA}
                            alt=""
                            src="/conversion-rate-optimizationamico-1.svg"
                        />
                    </div>
                    <div className={styles.frameChild16} />
                </div>
                <img
                    className={styles.selfServeSectionChild}
                    alt=""
                    src="/group-26@2x.png"
                />
            </div> */}
        </div>
    )
}

export default WhatOurClientsAreSayingSection