import React, { useState } from 'react'

function WhatOurClientsAreSayingSection({ styles }) {

    const [activeCard, setActiveCard] = useState(0)

    return (
        <div className={styles.whatOurClientsAreSayingRoot}>
            <div className={styles.whatOurClientsAreSayingParent}>
                <b className={styles.sectionMainHeading}>What our clients are saying</b>
                <div className={styles.withinACouple}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                </div>
            </div>
            <div className={styles.frameParent23}>
                <div data-active={activeCard == 0} className={styles.backgroundParent2}>
                    <img
                        className={styles.backgroundIcon}
                        alt=""
                        src="/background@2x.png"
                    />
                    <div className={styles.frameParent24}>
                        <div className={styles.selfServeCustomerSupportParent}>
                            <b className={styles.sectionMainHeading}>
                                Self-Serve Customer Support
                            </b>
                            <div className={styles.everSinceImplementing}>
                                Ever since implementing Xobot on our site, I've seen up to a 70%
                                reduction of customer support queries in my inbox.”
                            </div>
                        </div>
                        <div className={styles.frameChild17} />
                        <div className={styles.ellipseParent4}>
                            <img
                                className={styles.frameChild18}
                                alt=""
                                src="/ellipse-69@2x.png"
                            />
                            <div className={styles.bryceConwayParent}>
                                <div className={styles.bryceConway}>Bryce Conway</div>
                                <div className={styles.founderAndCeo}>
                                    Founder and CEO of 10xTravel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-active={activeCard == 1} className={styles.backgroundParent3}>
                    <img
                        className={styles.backgroundIcon1}
                        alt=""
                        src="/background1@2x.png"
                    />
                    <div className={styles.frameParent24}>
                        <div className={styles.amazingToolWrapper}>
                            <b className={styles.sectionMainHeading}>Amazing tool!</b>
                        </div>
                        <div className={styles.frameChild17} />
                        <div className={styles.ellipseParent5}>
                            <img
                                className={styles.frameChild18}
                                alt=""
                                src="/ellipse-691@2x.png"
                            />
                            <div className={styles.bryceConwayParent}>
                                <div className={styles.bryceConway}>JOHN DOE</div>
                                <div className={styles.founderAndCeo}>
                                    Founder and CEO of 10xTravel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-active={activeCard == 2} className={styles.backgroundParent4}>
                    <img
                        className={styles.backgroundIcon2}
                        alt=""
                        src="/background1@2x.png"
                    />
                    <div className={styles.frameParent26}>
                        <div className={styles.greatToGenerateLeadsWrapper}>
                            <b className={styles.sectionMainHeading}>
                                Great to generate leads
                            </b>
                        </div>
                        <div className={styles.frameChild17} />
                        <div className={styles.ellipseParent5}>
                            <img
                                className={styles.frameChild18}
                                alt=""
                                src="/ellipse-69@2x.png"
                            />
                            <div className={styles.bryceConwayParent}>
                                <div className={styles.bryceConway}>JOHN DOE</div>
                                <div className={styles.founderAndCeo}>
                                    Founder and CEO of 10xTravel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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