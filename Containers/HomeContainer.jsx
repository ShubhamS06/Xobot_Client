import React from "react";
import Header from "../Common/Header.jsx";
import Footer from "../Common/Footer.jsx";
import HeroSection from "../Components/HeroSection/index.jsx";
import MaximizeSection from "../Components/MaximizeSection/index.jsx";
import FaqSection from "../Components/FaqSection/index.jsx";
import TrustedSection from "../Components/TrustedSection/TrustedSection.jsx";
import ConnectToolsSection from "../Components/ConnectToolsSection/index.jsx";
import WhatDoWeOfferSection from "../Components/WhatDoWeOfferSection/index.jsx";
import BusinessesWeServerSection from "../Components/BusinessesWeServerSection/index.jsx";
import WhatOurClientsAreSayingSection from "../Components/WhatOurClientsAreSayingSection/index.jsx";

function HomeContainer({ styles }) {
  return (
    <>
      <div className={styles.landingPage}>
        <Header styles={styles} />
        <HeroSection styles={styles} />
        <BusinessesWeServerSection styles={styles} />
        <TrustedSection styles={styles} />        
        <ConnectToolsSection styles={styles} />
        <WhatDoWeOfferSection styles={styles} />        
        <WhatOurClientsAreSayingSection styles={styles} />
        <FaqSection styles={styles} />
        <MaximizeSection styles={styles} />
        <Footer styles={styles} />
      </div>
    </>
  );
}

export default HomeContainer;
