import React, { useState } from "react";
import compStyles from "./businesses.module.css";

function BusinessesWeServerSection({ styles }) {
  const [selectedItem, setSelectedItem] = useState("Saas");

  const items = [
    "Small Business",
    "Professional service",
    "Saas",
    "Enterprise",
  ];

  const content = {
    "Small Business": {
      title: "Optimize your small business operations",
      description:
        "Enhance efficiency and customer engagement with Xobot, providing 24/7 support and automating repetitive tasks.",
      image: "/conversion-rate-optimizationamico-1.svg",
    },
    "Professional service": {
      title: "Streamline your professional services",
      description:
        "Deliver top-notch professional services by automating client interactions and scheduling appointments with Xobot.",
      image: "/conversion-rate-optimizationamico-1.svg",
    },
    Saas: {
      title: "Streamline your sales process",
      description:
        "Transform your lead management by having Xobot immediately respond to inquiries, qualify your leads, and book demos for your sales team, all whilst integrating with your CRM.",
      image: "/conversion-rate-optimizationamico-1.svg",
    },
    Enterprise: {
      title: "Scale your enterprise operations",
      description:
        "Leverage Xobot to handle large volumes of customer interactions, ensuring consistency and efficiency across your enterprise.",
      image: "/conversion-rate-optimizationamico-1.svg",
    },
  };

  return (
    <div className={compStyles.businessesWeServerParent}>
      <div className={styles.sectionHeader}>
        <b className={styles.sectionMainHeading}>Businesses we serve</b>
        <div className={styles.sectionSubHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>

      <div className={compStyles.businessContainer}>
        <div className={compStyles.groupParent20}>
          <div className={compStyles.vectorParent13}>
            <img
              className={compStyles.groupChild68}
              alt=""
              src="/line-82.svg"
            />
          </div>
          <div className={compStyles.smallBusinessParent}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${compStyles.item} ${
                  item === selectedItem ? compStyles.selectedItem : ""
                }`}
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
          <div className={compStyles.headingImageGroup}>
            <div className={compStyles.streamlineYourSalesProcessParent}>
              <b className={compStyles.streamlineYourSales}>
                {content[selectedItem].title}
              </b>
              <div className={compStyles.transformYourLead}>
                {content[selectedItem].description}
              </div>
            </div>
            <img
              className={compStyles.conversionRateOptimizationA}
              alt=""
              src={content[selectedItem].image}
            />
          </div>
          <img
            className={compStyles.selfServeSectionChild}
            alt=""
            src="/group-26@2x.png"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessesWeServerSection;
