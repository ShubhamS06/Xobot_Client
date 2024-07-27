import React from 'react'

function Footer({styles}) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoAndText}>
                    <img className={styles.footerIcon} src="/group-15@2x.png" alt="" />
                    <div className={styles.weGrowingUp}>
                        Let us do the TALKING! While you focus on the Business.
                    </div>
                    <div className={styles.xobot}>Xobot</div>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.linksColumn}>
                        <div className={styles.platform}>Platform</div>
                        <div className={styles.links}>
                            <div className={styles.plansPricing}>{`Plans & Pricing`}</div>
                            <div className={styles.plansPricing}>Personal AI Manager</div>
                            <div className={styles.plansPricing}>AI Business Writer</div>
                        </div>
                    </div>
                    <div className={styles.linksColumn}>
                        <div className={styles.platform}>Company</div>
                        <div className={styles.links}>
                            <div className={styles.plansPricing}>Blog</div>
                            <div className={styles.plansPricing}>Careers</div>
                            <div className={styles.plansPricing}>News</div>
                        </div>
                    </div>
                    <div className={styles.linksColumn}>
                        <div className={styles.platform}>Resources</div>
                        <div className={styles.links}>
                            <div className={styles.plansPricing}>Documentation</div>
                            <div className={styles.plansPricing}>Papers</div>
                            <div className={styles.plansPricing}>Press Conferences</div>
                        </div>
                    </div>
                    <div className={styles.linksColumn}>
                        <div className={styles.platform}>Get the app</div>
                        <div className={styles.links3}>
                            <button className={`${styles.platform1} ${styles.plansPricing}`}>
                                <img
                                    className={styles.riwindowsFillIcon}
                                    alt=""
                                    src="/riwindowsfill.svg"
                                />
                                    Windows
                            </button>
                            <button className={`${styles.platform1} ${styles.plansPricing}`}>
                                <img
                                    className={styles.riwindowsFillIcon}
                                    alt=""
                                    src="/icroundapple.svg"
                                />
                                    macOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container1}>
                <div className={styles.discord}>
                    © 2023 Wonderc hat. All rights reserved.
                </div>
                <div className={styles.links4}>
                    <div className={styles.discord}>Terms of Service</div>
                    <div className={styles.discord}>Privacy Policy</div>
                    <div className={styles.discord}>Cookies</div>
                </div>
            </div>
        </div>
    )
}

export default Footer