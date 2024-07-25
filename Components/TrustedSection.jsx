import React from 'react'

function TrustedSection({ styles }) {
    return (
        <div className={styles.trustedSection}>
            <div className={styles.frameParent8}>
                <div className={styles.trustedBy100BusinessesParent}>
                    <b className={styles.minuteSetUpProcess}>
                        Trusted by 100+ businesses
                    </b>
                    <div className={styles.logoAndBgParent}>
                        <img className={styles.logosIcon} alt="" src="/logos.svg" />
                        <img className={styles.groupIcon} alt="" src="/group-202@2x.png" />
                    </div>

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