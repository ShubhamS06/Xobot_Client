import React, { useState } from 'react'
import compStyles from "./businesses.module.css";

function BusinessesWeServerSection({ styles }) {
    const [selectedItem, setSelectedItem] = useState('Saas');

    const items = ['Small Business', 'Professional service', 'Saas', 'Enterprise'];

    const getTopPosition = (index) => {
        const baseTopPosition = 100;
        const itemHeight = 100;
        return `${baseTopPosition + index * itemHeight}px`;
    };
    return (
        <div className={compStyles.businessesWeServerParent}>
            <b className={styles.minuteSetUpProcess}>Businesses we serve</b>
            <div className={styles.withinACouple}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>

            <div className={compStyles.businessContainer}>
                <div className={compStyles.groupParent20}>
                    <div className={compStyles.vectorParent13}>
                        <img className={compStyles.groupChild68} alt="" src="/line-82.svg" />
                        {/* <img
                            className={compStyles.groupChild69}
                            alt=""
                            src="/polygon-4.svg"
                            style={{ top: getTopPosition(items.indexOf(selectedItem)) }}
                        /> */}
                    </div>
                    <div className={compStyles.smallBusinessParent}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`${compStyles.item} ${item === selectedItem ? compStyles.selectedItem : ''}`}
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    className={compStyles.selectedItemIcon}
                                    alt=""
                                    src="/polygon-4.svg"
                                />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={compStyles.selfServeSection}>
                    {/* <div className={compStyles.frameParent21}> */}
                    <div className={compStyles.headingImageGroup}>
                        <div className={compStyles.streamlineYourSalesProcessParent}>
                            <b className={compStyles.streamlineYourSales}>
                                Streamline your sales process
                            </b>
                            <div className={compStyles.transformYourLead}>
                                Transform your lead management by having Xobot immediately
                                respond to inquiries, qualify your leads, and book demos for
                                your sales team, all whilst integrating with your CRM.
                            </div>
                        </div>
                        <img
                            className={compStyles.conversionRateOptimizationA}
                            alt=""
                            src="/conversion-rate-optimizationamico-1.svg"
                        />
                    </div>
                    {/* <div className={compStyles.frameChild16} /> */}
                    {/* </div> */}
                    <img
                        className={compStyles.selfServeSectionChild}
                        alt=""
                        src="/group-26@2x.png"
                    />
                </div>

            </div>
        </div>
    )
}

export default BusinessesWeServerSection