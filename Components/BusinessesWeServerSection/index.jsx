import React, { useState } from "react";
import compStyles from "./businesses.module.css";

function BusinessesWeServerSection({ styles }) {
  const imageMap = {
    salesforce: "/image-7@2x.png",
    zoho: "/zoho-icon.webp",
    zoom: "/zoom-icon.png",
    calendly: "/Calendly-Icon.svg",
    googleCalendar: "/google-calendar-icon.svg",
  };

  const content = {
    "Schedule Appointment": {
      content: "Good for -",
      subcontent: [
        {
          points: [],
          heading:"Easy booking setup"
        },
        {
          heading:"Across-industry reservations",points: []
        },
        {
          heading: "Calendar voice sync", points: []
        },
        {
          heading:"Any scheduling business.ex: Restaurants, Travel, Hospital, Education Consultants",
          points: []
        },
      ],
      image: "/conversion-rate-optimizationamico-1.svg",
      integrations: {
        calendly: imageMap["calendly"],
        zoom: imageMap["zoom"],
        googleCalendar: imageMap["googleCalendar"],
      },
    },
    "Sales Lead": {
      content: "Good for -",
      subcontent: [
        {
          heading: "Initiating contact with potential customers to introduce products or services. Asks qualifying questions to assess the potential lead's interest and needs.Provides information about products or services.",
          points: [],
        },
        {
          heading: "Businesses which can Benefit: Real Estate, Finance, Education",
          points: [],
        }
      ],
      image: "/conversion-rate-optimizationamico-1.svg",
      integrations: {
        salesforce: imageMap["salesforce"],
        zoho: imageMap["zoho"],
      },
    },
    "Missing Info": {
      content: "Good for -",
      subcontent: [
        {
          heading: "Real Estate",
          points: [
            "Gathering additional details from prospective buyers or renters.",
            "Confirming missing information on property listings or client profiles.",
          ],
        },
        {
          heading: "Education",
          points: [
            "Collecting missing information from student applications or registrations.",
            "Following up on incomplete scholarship or financial aid forms.",
          ],
        },
        {
          heading: "Government and Public Services",
          points: [
            "Collecting additional information required for public service applications or registrations",
            "Following up on incomplete government forms or documents.",
          ],
        },
        {
          heading: "Finance",
          points: [
            "Gathering additional information required for loan applications, account openings, or insurance policies.",
            "Confirming missing financial details or documents.",
          ],
        },
      ],
      image: "/conversion-rate-optimizationamico-1.svg",
      integrations: {
        salesforce: imageMap["salesforce"],
        zoho: imageMap["zoho"],
      },
    },
    "FAQ Voice Agent": {
      content: "Good for -",
      subcontent: [
        {
          heading: "Real Estate",
          points: [
            "Providing information about available properties, pricing, and viewing schedules",
            "Answering questions about the buying, selling, or renting process.",
          ],
        },
        {
          heading: "E-commerce",
          points: [
            "Offering assistance with order tracking, shipping, returns, and refunds.",
            "Providing information about product availability, specifications, and customer reviews.",
          ],
        },
        {
          heading: "Travel and Tourism",
          points: [
            "Providing information about destinations, travel packages, and booking procedures",
            "Answering queries about visas, travel insurance, and itinerary planning.",
          ],
        },
        {
          heading: "Education",
          points: [
            "Answering queries about Accomodation, courses, admission processes, fees, and campus facilities.",
          ],
        },
      ],
      image: "/conversion-rate-optimizationamico-1.svg",
    },
  };

  const items = Object.keys(content);

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className={compStyles.businessesWeServerParent}>
      <div className={styles.sectionHeader}>
        <b className={styles.sectionMainHeading}>Use cases</b>
        <div className={styles.sectionSubHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>

      <div className={compStyles.businessContainer}>
        <div className={compStyles.togglerParent}>
          <div className={compStyles.togglerLine}>
            <img
              className={compStyles.togglerLineImg}
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
            <div className={compStyles.cardContentParent}>
              <b className={compStyles.contentHeading}>
                {content[selectedItem].content}
              </b>
              <div className={compStyles.transformYourLead}>
                {content[selectedItem].subcontent.map((item, index) => (
                  <div className={compStyles.subcontent} key={index}>
                    {!!item.heading && (
                      <div className={compStyles.heading}>
                        <img src="/circle-right-sign.svg" alt="" />
                        {item.heading}
                      </div>
                    )}
                    <ul className={compStyles.points}>
                      {item.points.map((point, index) => (
                        <li className={compStyles.point} key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {!!content[selectedItem].integrations && (
                  <>
                    <b className={compStyles.contentHeading}>
                      Integrats with -
                    </b>
                    <div className={compStyles.integrations}>
                      {Object.entries(content[selectedItem].integrations)
                        .slice(0, 2)
                        ?.map(([key, src]) => (
                          <div key={key} className={compStyles.integration}>
                            <img src={src} alt="" />
                          </div>
                        ))}
                      <div className={compStyles.integration}>
                        + <div style={{fontSize: "1.2em"}}>and more</div>
                      </div>
                    </div>
                  </>
                )}
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
