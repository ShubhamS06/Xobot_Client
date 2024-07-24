import React from 'react'

function MaximizeSection({styles}) {
    return (
        <div className={styles.maximizeSection}>
            <img className={styles.maximizeHeroStars} src="/hero-stars.svg" alt="" />
            <img className={styles.maximizeHeroStars2} src="/hero-stars.svg" alt="" />

            <div className={styles.maximizeSectionChild} />
            <div className={styles.frameParent5}>
                <div className={styles.maximizeYourSupportCapacityParent}>
                    <b className={styles.maximizeYourSupport}>
                        Maximize your support capacity without extra hiring
                    </b>
                    <div className={styles.spend5Minutes}>
                        Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7
                        to help you engage and retain more users and boost conversions.
                    </div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.getStartedForFreeWrapper}>
                        <div className={styles.getStartedFor}>Get started for free</div>
                    </div>
                    <div className={styles.buttonInner}>
                        <div className={styles.vectorParent}>
                            <img
                                className={styles.frameChild}
                                alt=""
                                src="/polygon-2.svg"
                            />
                            <div className={styles.getStartedFor}>Watch Video</div>
                        </div>
                    </div>
                </div>
                <img className={styles.unionIcon8} alt="" src="/union3.svg" />
                <img className={styles.unionIcon8} alt="" src="/union3.svg" />
            </div>
        </div>
    )
}

export default MaximizeSection