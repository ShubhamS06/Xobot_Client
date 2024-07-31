import React from 'react'

function Footer({styles}) {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogoTextParent}>
                    <img className={styles.footerIcon} src="/group-15@2x.png" alt="" />
                    <div className={styles.footerText}>
                        Let us do the TALKING! While you focus on the Business.
                    </div>
                    <div className={styles.footerBrandText}>Xobot</div>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.footerLinksColumn}>
                        <div className={styles.footerLinksHeader}>Platform</div>
                        <div className={styles.footerLinkGroup}>
                            <div className={styles.footerLink}>{`Plans & Pricing`}</div>
                            <div className={styles.footerLink}>Personal AI Manager</div>
                            <div className={styles.footerLink}>AI Business Writer</div>
                        </div>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <div className={styles.footerLinksHeader}>Company</div>
                        <div className={styles.footerLinkGroup}>
                            <div className={styles.footerLink}>Blog</div>
                            <div className={styles.footerLink}>Careers</div>
                            <div className={styles.footerLink}>News</div>
                        </div>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <div className={styles.footerLinksHeader}>Resources</div>
                        <div className={styles.footerLinkGroup}>
                            <div className={styles.footerLink}>Documentation</div>
                            <div className={styles.footerLink}>Papers</div>
                            <div className={styles.footerLink}>Press Conferences</div>
                        </div>
                    </div>
                    <div className={styles.footerLinksColumn}>
                        <div className={styles.footerLinksHeader}>Get the app</div>
                        <div className={styles.footerLinkButtonGroup}>
                            <button className={`${styles.footerLinkButton} ${styles.footerLink}`}>
                                <img
                                    className={styles.footerButtonInnerIcon}
                                    alt=""
                                    src="/riwindowsfill.svg"
                                />
                                    Windows
                            </button>
                            <button className={`${styles.footerLinkButton} ${styles.footerLink}`}>
                                <img
                                    className={styles.footerButtonInnerIcon}
                                    alt=""
                                    src="/icroundapple.svg"
                                />
                                    macOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottomContainer}>
                <div className={styles.menuItem}>
                    © 2023 Wonderc hat. All rights reserved.
                </div>
                <div className={styles.links4}>
                    <div className={styles.menuItem}>Terms of Service</div>
                    <div className={styles.menuItem}>Privacy Policy</div>
                    <div className={styles.menuItem}>Cookies</div>
                </div>
            </div>
        </div>
    )
}

export default Footer