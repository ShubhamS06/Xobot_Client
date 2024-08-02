import React, { useState } from "react";
import styleModule from "./faq.module.css";
import CommonAccordion from "./Accordian.jsx";

function FaqSection({ styles }) {
  const faqItems = [
    { id: "01", question: "What is Xobot?" },
    { id: "02", question: "Does it support all languages?" },
    { id: "03", question: "Do I need to know code to use Xobot?" },
    {
      id: "04",
      question: "Will I be able to embed the chatbot into my website?",
    },
    {
      id: "05",
      question:
        "Can multiple team members in my organization manage my chatbots?",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div className={styleModule.faqSection}>
      <div className={styles.sectionHeader}>
        <b className={styles.sectionMainHeading}>FAQ's</b>
      </div>
      <div className={styleModule.faqQuestionGroup}>
        {faqItems.map((faq, index) => (
          <CommonAccordion
            key={index}
            index={index}
            question={faq.question}
            answar={"test accordian ans"}
            onExpand={onExpand}
            isExpanded={expandedIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
