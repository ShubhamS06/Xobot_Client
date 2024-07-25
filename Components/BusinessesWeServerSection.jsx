import React, { useState } from 'react'

function BusinessesWeServerSection({ styles }) {
    const [selectedItem, setSelectedItem] = useState('Saas');

    const items = ['Small Business', 'Professional service', 'Saas', 'Enterprise'];

    const getTopPosition = (index) => {
        const baseTopPosition = 100;
        const itemHeight = 100;
        return `${baseTopPosition + index * itemHeight}px`;
    };
    return (
        <>
            <div className={styles.businessesWeServerParent}>
                <b className={styles.minuteSetUpProcess}>Businesses we server</b>
                <div className={styles.withinACouple}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
            </div>
            <div className={styles.selfServeSection}>
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
            </div>
            <div className={styles.groupParent20}>
                <div className={styles.vectorParent13}>
                    <img className={styles.groupChild68} alt="" src="/line-82.svg" />
                    <img
                        className={styles.groupChild69}
                        alt=""
                        src="/polygon-4.svg"
                        style={{ top: getTopPosition(items.indexOf(selectedItem)) }}
                    />
                </div>
                <div className={styles.smallBusinessParent}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${item === selectedItem ? styles.selectedItem : ''}`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BusinessesWeServerSection