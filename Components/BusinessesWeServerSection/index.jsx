import React, { useState } from "react";
import compStyles from "./businesses.module.css";

function BusinessesWeServerSection({ styles }) {
  const [selectedItem, setSelectedItem] = useState("Sales Lead Agent");

  const items = [
    "Schedule Appointment",
    "Sales Lead Agent",
    "Collect Missing Info",
    "FAQ Voice Agent"
  ];

  const content = {
    "Schedule Appointment": {
      title: "Optimize your appointments with agent",
      description:
        "Enhance efficiency and customer engagement with Xobot, providing 24/7 support and automating repetitive tasks.",
      image: "/conversion-rate-optimizationamico-1.svg"
    },
    "Sales Lead Agent": {
      title: "Sales Lead Agent",
      description:
        "Deliver top-notch Sales Lead agent by automating client interactions and scheduling appointments with Xobot.",
      image: "/conversion-rate-optimizationamico-1.svg"
    },
    "Collect Missing Info": {
      title: "Collect missing Info",
      description:
        "Transform your lead management by having Xobot immediately respond to inquiries, qualify your leads, and book demos for your sales team, all whilst integrating with your CRM.",
      image: "/conversion-rate-optimizationamico-1.svg"
    },
    "FAQ Voice Agent": {
      title: "Scale your enterprise operations",
      description:
        "Leverage Xobot to handle large volumes of customer interactions, ensuring consistency and efficiency across your enterprise.",
      image: "/conversion-rate-optimizationamico-1.svg"
    }
  };

  return (
    <div className={compStyles.businessesWeServerParent}>
      <b className={styles.sectionMainHeading}>Use cases</b>
      <div className={styles.withinACouple}>
        Conversational Voice AI, Trained To Speak Your Business.
      </div>

      <div className={compStyles.businessContainer}>
        <div className={compStyles.indicatorRoot}>
          <div className={compStyles.indicatorLineParent}>
            <img
              className={compStyles.indicatorLine}
              alt=""
              src="/line-82.svg"
            />
          </div>
          <div className={compStyles.indicatorTextParent}>
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
