import React from 'react'

function FaqSection({ styles }) {
    return (
        <div className={styles.faqSection}>
            <b className={styles.minuteSetUpProcess}>FAQ’s</b>
            {/* <div className={styles.faqContainer}>
                <div className={styles.faqItem}>
                    <div><span className={styles.number}>01</span><h3>What is Xobot?</h3></div>
                    <div className={styles.toggle}>+</div>
                </div>
                <div className={styles.faqItem}>
                    <div><span className={styles.number}>02</span><h3>Does it support all languages?</h3></div>
                    <div className={styles.toggle}>+</div>
                </div>
                <div className={styles.faqItem}>
                    <div><span className={styles.number}>03</span><h3>Do I need to know code to use Xobot?</h3></div>
                    <div className={styles.toggle}>+</div>
                </div>
                <div className={styles.faqItem}>
                    <div><span className={styles.number}>04</span><h3>Will I be able to embed the chatbot into my website?</h3></div>
                    <div className={styles.toggle}>+</div>
                </div>
                <div className={styles.faqItem}>
                    <div><span className={styles.number}>05</span><h3>Can multiple team members in my organization manage my chatbots?</h3></div>
                    <div className={styles.toggle}>+</div>
                </div>
            </div> */}
            {<div className={styles.unionParent4}>
                <img className={styles.unionIcon10} alt="" src="/union4.svg" />
                <div className={styles.frameParent7}>
                    <div className={styles.parent}>
                        <div className={styles.div}>01</div>
                        <div className={styles.div}>What is Xobot?</div>
                    </div>
                    <img className={styles.unionIcon11} alt="" src="/union5.svg" />
                </div>
                <div className={styles.div1}>02</div>
                <div className={styles.doesItSupport}>
                    Does it support all languages?
                </div>
                <img className={styles.unionIcon12} alt="" src="/union5.svg" />
                <div className={styles.div2}>03</div>
                <div className={styles.doINeed}>
                    Do I need to know code to use Xobot?
                </div>
                <img className={styles.unionIcon12} alt="" src="/union5.svg" />
                <div className={styles.div3}>04</div>
                <div className={styles.willIBe}>
                    Will I be able to embed the chatbot into my website?
                </div>
                <img className={styles.unionIcon12} alt="" src="/union5.svg" />
                <div className={styles.div4}>05</div>
                <div className={styles.canMultipleTeam}>
                    Can multiple team members in my organization manage my chatbots?
                </div>
                <img className={styles.unionIcon12} alt="" src="/union5.svg" />
            </div>}
        </div>
    )
}

export default FaqSection