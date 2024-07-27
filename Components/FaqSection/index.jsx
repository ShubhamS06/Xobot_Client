import React, { useState } from 'react';
import styleModule from './faq.module.css'
import CommonAccordion from './Accordian.jsx'

function FaqSection({ styles }) {
    const faqItems = [
        { id: '01', question: 'What is Xobot?' },
        { id: '02', question: 'Does it support all languages?' },
        { id: '03', question: 'Do I need to know code to use Xobot?' },
        { id: '04', question: 'Will I be able to embed the chatbot into my website?' },
        { id: '05', question: 'Can multiple team members in my organization manage my chatbots?' },
    ];
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const onExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    return (
        <div className={styleModule.faqSection}>
            <b className={styleModule.sectionMainHeading}>FAQ's</b>
            {/* <div className={styles.unionParent4}> */}
            <div className={styleModule.faqQuestionGroup}>
                {faqItems.map((faq, index) => (
                    <CommonAccordion key={index} index={index} question={faq.question} answar={"test accordian ans"} onExpand={onExpand} isExpanded={expandedIndex === index} />
                ))}
            </div>
        </div>
    );
}

export default FaqSection;




// import React from 'react'

// function FaqSection({ styles }) {
//     return (
//         <div className={styles.faqSection}>
//             <b className={styles.sectionMainHeading}>FAQ’s</b>
//             {<div className={styles.unionParent4}>
//                 <img className={styles.unionIcon10} alt="" src="/union4.svg" />
//                 <div className={styles.frameParent7}>
//                     <div className={styles.parent}>
//                         <div className={styles.div}>01</div>
//                         <div className={styles.div}>What is Xobot?</div>
//                     </div>
//                     <img className={styles.unionIcon11} alt="" src="/union5.svg" />
//                 </div>
//                 <div className={styles.div1}>02</div>
//                 <div className={styles.doesItSupport}>
//                     Does it support all languages?
//                 </div>
//                 <img className={styles.unionIcon12} alt="" src="/union5.svg" />
//                 <div className={styles.div2}>03</div>
//                 <div className={styles.doINeed}>
//                     Do I need to know code to use Xobot?
//                 </div>
//                 <img className={styles.unionIcon12} alt="" src="/union5.svg" />
//                 <div className={styles.div3}>04</div>
//                 <div className={styles.willIBe}>
//                     Will I be able to embed the chatbot into my website?
//                 </div>
//                 <img className={styles.unionIcon12} alt="" src="/union5.svg" />
//                 <div className={styles.div4}>05</div>
//                 <div className={styles.canMultipleTeam}>
//                     Can multiple team members in my organization manage my chatbots?
//                 </div>
//                 <img className={styles.unionIcon12} alt="" src="/union5.svg" />
//             </div>}
//         </div>
//     )
// }

// export default FaqSection