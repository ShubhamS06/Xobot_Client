import React from 'react'
import compStyles from "./connect.module.css";

function ConnectToolsSection({ styles }) {
    return (
        <div className={compStyles.connectParent}>
            <div className={compStyles.rectangleParent21}>
                {/* <div className={compStyles.groupChild52} /> */}
                <div className={compStyles.connectToToolsYouUseParent}>
                    <b className={styles.minuteSetUpProcess}>
                        Connect to tools you use
                    </b>
                    <div className={styles.withinACouple}>
                        Within a Couple of Steps your AI Voice Bot is ready to be used.
                    </div>
                </div>

                <img className={compStyles.toolImage} src='/connect-tools.svg' alt="" />

                {/* <div className={compStyles.stack}>
                    <div className={compStyles.frameParent15}>
                        <img src="/connect-tools-images.svg" alt="" />
                    </div>
                    <div className={compStyles.unionParent9}>
                        <div className={compStyles.union6}>
                            <img className={compStyles.unionChild10} src='/connect-tools.svg' alt="" />
                            <img className={compStyles.unionIcon20} alt="" src="/union7.svg" />
                        </div>
                        <div className={compStyles.rectangleParent22}>
                            <div className={compStyles.groupChild53} />
                            <div className={compStyles.groupChild54} />
                            <div className={compStyles.groupChild55} />
                            <div className={compStyles.groupChild56} />
                            <div className={compStyles.groupChild57} />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ConnectToolsSection