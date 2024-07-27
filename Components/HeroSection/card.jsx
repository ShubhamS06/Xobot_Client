export default function Card({ styles, title }) {
    return (
        <div data-is="card" className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.cardInner}>
                    <div className={styles.cardTopTitle}>
                        Talk to Xobot
                    </div>
                    <div className={styles.cardTitle}>
                        {title}
                    </div>

                    <div className={styles.cardContent}>
                        <div className={styles.playIconParent}>
                            <div className={styles.playIconGroup}>
                                <img className={styles.playIconBg}
                                    alt=""
                                    src="/talk-on-web-icon.svg"
                                />
                                <img className={styles.playIcon} alt="" src="/play.svg" />
                            </div>
                        </div>

                        <div className={styles.middleText}>Click to talk</div>

                        <div className={styles.iconRoot}>
                            <img
                                className={styles.iconBg}
                                alt=""
                                src="/ellipse-74@2x.png"
                            />
                            <div className={styles.phoneoutgoingParent}>
                                <img
                                    className={styles.phoneoutgoingIcon}
                                    alt=""
                                    src="/phoneoutgoing.svg"
                                />
                                <div className={styles.talkOnWeb}>Talk on call</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
