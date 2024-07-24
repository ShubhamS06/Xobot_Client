import React from 'react'
import Header from "../Common/Header.jsx"
import Footer from "../Common/Footer.jsx"
import HeroSection from "../Components/HeroSection.jsx"
import MaximizeSection from "../Components/MaximizeSection.jsx"
import FaqSection from "../Components/FaqSection.jsx"
import TrustedSection from "../Components/TrustedSection.jsx"
import ConnectToolsSection from "../Components/ConnectToolsSection.jsx"
import WhatDoWeOfferSection from "../Components/WhatDoWeOfferSection.jsx"
import BusinessesWeServerSection from "../Components/BusinessesWeServerSection.jsx"
import WhatOurClientsAreSayingSection from "../Components/WhatOurClientsAreSayingSection.jsx"

function HomeContainer({ styles }) {
    return (
        <div className={styles.landingPage}>
            <div className={styles.landingPageChild} />
            <div className={styles.landingPageItem} />
            <div className={styles.landingPageInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.landingPageChild1} />
            {/* <img className={styles.unionIcon} alt="" src="/union.svg" />
            <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
            <Header styles={styles} />
            <HeroSection styles={styles} />
            <MaximizeSection styles={styles} />
            <FaqSection styles={styles} />
            <img className={styles.groupIcon} alt="" src="/group-202@2x.png" />
            <TrustedSection styles={styles} />
            <img className={styles.landingPageChild2} alt="" src="/group-220.svg" />
            <ConnectToolsSection styles={styles} />
            <WhatDoWeOfferSection styles={styles} />
            <BusinessesWeServerSection styles={styles} />
            <WhatOurClientsAreSayingSection styles={styles} />
            <img
                className={styles.landingPageChild3}
                alt=""
                src="/group-151@2x.png"
            />
            <Footer styles={styles} />
        </div>
    )
}

export default HomeContainer