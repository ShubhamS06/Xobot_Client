import React from 'react'
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
    ]

    return (
        <div className={styles.trustedSection}>
            <div className={styles.frameParent8}>
                <div className={styles.trustedBy100BusinessesParent}>
                    <b className={styles.minuteSetUpProcess}>
                        Trusted by 100+ businesses
                    </b>
                    <div className={compStyles.companyLogoGroup}>
                        {companies.map((company, index) => <div key={company.logo} data-row={companies.length / 2 <= index ? 2 : 1} data-first={companies.length / 2 == index} className={compStyles.companyLogo}>
                            <img alt="" src={company.logo} />
                        </div>)}
                    </div>
                    {/* <div className={styles.logoAndBgParent}>
                        <img className={styles.logosIcon} alt="" src="/logos.svg" />
                        <img className={styles.groupIcon} alt="" src="/group-202@2x.png" />
                    </div> */}

                </div>
                <div className={styles.frameParent9}>
                    <div className={styles.minuteSetUpProcessParent}>
                        <b className={styles.minuteSetUpProcess}>
                            5 minute set-up process
                        </b>
                        <div className={styles.withinACouple}>
                            Within a Couple of Steps your AI Voice Bot is ready to be used.
                        </div>
                    </div>
                    <div className={styles.frameParent10}>
                        <div className={styles.backgroundParent}>
                            <div className={styles.background}>
                                <div className={styles.backgroundChild} />
                                <div className={styles.backgroundItem} />
                                <div className={styles.backgroundInner} />
                            </div>
                            <div className={styles.targetParent}>
                                <img className={styles.targetIcon} alt="" src="/target.svg" />
                                <div className={styles.frameParent11}>
                                    <div className={styles.unionParent5}>
                                        <img
                                            className={styles.unionIcon16}
                                            alt=""
                                            src="/union6.svg"
                                        />
                                        <div className={styles.analytics}>Step 1</div>
                                    </div>
                                    <div className={styles.chooseGoalFor}>
                                        Choose goal for your agent
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.backgroundParent}>
                            <div className={styles.background}>
                                <div className={styles.backgroundChild} />
                                <div className={styles.backgroundItem} />
                                <div className={styles.backgroundInner} />
                            </div>
                            <div className={styles.targetParent}>
                                <img
                                    className={styles.plugsconnectedIcon}
                                    alt=""
                                    src="/plugsconnected.svg"
                                />
                                <div className={styles.frameParent11}>
                                    <div className={styles.unionParent5}>
                                        <img
                                            className={styles.unionIcon16}
                                            alt=""
                                            src="/union6.svg"
                                        />
                                        <div className={styles.analytics}>Step 2</div>
                                    </div>
                                    <div className={styles.chooseGoalFor}>
                                        Connect to your CRM
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.backgroundParent}>
                            <div className={styles.background}>
                                <div className={styles.backgroundChild} />
                                <div className={styles.backgroundItem} />
                                <div className={styles.backgroundInner} />
                            </div>
                            <div className={styles.targetParent}>
                                <img
                                    className={styles.targetIcon}
                                    alt=""
                                    src="/usercircleplus.svg"
                                />
                                <div className={styles.frameParent11}>
                                    <div className={styles.unionParent5}>
                                        <img
                                            className={styles.unionIcon16}
                                            alt=""
                                            src="/union6.svg"
                                        />
                                        <div className={styles.analytics}>Step 3</div>
                                    </div>
                                    <div className={styles.chooseGoalFor}>
                                        Add phone numbers
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.backgroundParent}>
                            <div className={styles.background}>
                                <div className={styles.backgroundChild} />
                                <div className={styles.backgroundItem} />
                                <div className={styles.backgroundInner} />
                            </div>
                            <div className={styles.targetParent}>
                                <img
                                    className={styles.targetIcon}
                                    alt=""
                                    src="/rocketlaunch.svg"
                                />
                                <div className={styles.frameParent11}>
                                    <div className={styles.unionParent5}>
                                        <img
                                            className={styles.unionIcon16}
                                            alt=""
                                            src="/union6.svg"
                                        />
                                        <div className={styles.analytics}>Step 4</div>
                                    </div>
                                    <div
                                        className={styles.chooseGoalFor}
                                    >{`Test & deploy`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button className={`${styles.getStartedForFreeWrapper} ${styles.getStartedFor}`}>
                            Get started for free
                        </button>
                        <button className={`${styles.getStartedForFreeWrapper} ${styles.vectorParent}`}>
                            <img
                                className={styles.frameChild}
                                alt=""
                                src="/polygon-2.svg"
                            /> Watch Video
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
                </div>
            </div>

        </div>
    )
}

export default TrustedSection