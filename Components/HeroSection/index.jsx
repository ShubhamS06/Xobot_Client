import React from 'react'
// import heroStyles from "./hero.module.css";

export default function HeroSection({ styles }) {
    return (
        <div className={styles.heroSectionParent}>
            <img className={styles.heroStars} src="/hero-stars.svg" alt="" />
            <img className={styles.heroStars2} src="/hero-stars.svg" alt="" />

            <div className={styles.heroSection}>
                <div className={styles.captionParent}>
                    <div className={styles.caption}>
                        <div className={styles.welcomeToXobot}>Welcome to XOBOT</div>
                    </div>
                    <b className={styles.letUsDo}>
                        Let us do the TALKING! while you focus on your business
                    </b>
                </div>
                <div className={styles.shareYourSiteLinkOrUploadParent}>
                    <div className={styles.shareYourSite}>
                        Share your site link or upload any PDF file to create a ChatGPT
                        powered custom chatbot in 5 minutes
                    </div>
                    <div className={styles.frameParent}>
                        <button className={`${styles.getStartedForFreeWrapper} ${styles.getStartedFor}`}>
                            Get started for free
                        </button>
                        <button className={`${styles.getStartedForFreeWrapper} ${styles.vectorParent}`}>
                            <img
                                className={styles.frameChild}
                                alt=""
                                src="/polygon-2.svg"
                            /> Watch Video
                        </button>
                        {/* <div className={styles.frameWrapper}>
                            <div className={styles.vectorParent}>
                                <img
                                    className={styles.frameChild}
                                    alt=""
                                    src="/polygon-2.svg"
                                />
                                <div className={styles.getStartedFor}>Watch Video</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.captionGroup}>
                <div className={styles.caption1}>
                    <div className={styles.welcomeToXobot}>talk to xobot</div>
                    <div className={styles.captionInner}>
                        {/* <div className={styles.englishParent}> */}
                            <select className={`${styles.englishParent} ${styles.getStartedFor}`}>
                                <option value="English">English</option>
                                <option value="English">Hindi</option>
                                <option value="English">Chinies</option>
                            </select>
                        {/* </div> */}
                    </div>
                </div>
                <div className={styles.groupParent}>
                    <div data-is="card" className={styles.dashboardParent}>
                        <div className={styles.dashboard}>
                            <div className={styles.dashboardChild} />
                            <div className={styles.dashboardItem} />
                            <div className={styles.screen}>
                                <div className={styles.dashboard1}>
                                    <div className={styles.dashboard1Inner}>
                                        <div className={styles.groupContainer}>
                                            <div className={styles.jumpstartWithOurTemplatesParent}>
                                                <div className={styles.jumpstartWithOur}>
                                                    Jumpstart with our Templates
                                                </div>
                                                <div className={styles.frameDiv}>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            Schedule Appointment Agent
                                                        </div>
                                                        <img
                                                            className={styles.image37Icon}
                                                            alt=""
                                                            src="/image-37@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>
                                                                Sales Lead Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image39Icon}
                                                            alt=""
                                                            src="/image-39@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>{`Collect `}</p>
                                                            <p className={styles.blankLine}>
                                                                Missing info Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image40Icon}
                                                            alt=""
                                                            src="/image-40@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>FAQ Agent</p>
                                                        </div>
                                                        <img
                                                            className={styles.image41Icon}
                                                            alt=""
                                                            src="/image-41@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.moreForYouParent}>
                                                <div className={styles.moreForYou}>More for you</div>
                                                <div className={styles.groupParent1}>
                                                    <div className={styles.vectorGroup}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-3.svg"
                                                        />
                                                        <img className={styles.ellipseIcon} alt="" />
                                                        <div className={styles.documentation}>
                                                            Documentation
                                                        </div>
                                                        <img
                                                            className={styles.iconDocument}
                                                            alt=""
                                                            src="/-icon-document.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.contactSupport}>
                                                            Contact Support
                                                        </div>
                                                        <img
                                                            className={styles.usercirclegearIcon}
                                                            alt=""
                                                            src="/usercirclegear.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.faqs}>FAQs</div>
                                                        <img
                                                            className={styles.vectorIcon}
                                                            alt=""
                                                            src="/vector.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.iconDocument1}
                                                            alt=""
                                                            src="/-icon-document1.svg"
                                                        />
                                                        <div className={styles.documentation1}>
                                                            Documentation
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.usercirclegearIcon1}
                                                            alt=""
                                                            src="/usercirclegear1.svg"
                                                        />
                                                        <div className={styles.contactSupport1}>
                                                            Contact support
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.vectorIcon1}
                                                            alt=""
                                                            src="/vector1.svg"
                                                        />
                                                        <div className={styles.platform}>FAQs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.groupParent2}>
                                        <div className={styles.rectangleParent1}>
                                            <div className={styles.groupChild5} />
                                            <div className={styles.rectangleParent2}>
                                                <div className={styles.frameItem} />
                                                <div className={styles.frameInner} />
                                                <div className={styles.groupWrapper}>
                                                    <div className={styles.unionParent}>
                                                        <div className={styles.union}>
                                                            <div className={styles.unionChild} />
                                                            <img className={styles.unionItem} alt="" />
                                                        </div>
                                                        <img
                                                            className={styles.unionIcon1}
                                                            alt=""
                                                            src="/union1.svg"
                                                        />
                                                        <div className={styles.rectangleParent3}>
                                                            <div className={styles.groupChild6} />
                                                            <div className={styles.groupChild7} />
                                                            <div className={styles.groupChild8} />
                                                            <div className={styles.groupChild9} />
                                                            <div className={styles.groupChild10} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.lineDiv} />
                                                <div className={styles.frameGroup}>
                                                    <div className={styles.templatesParent}>
                                                        <div className={styles.templates}>Templates</div>
                                                        <img
                                                            className={styles.element4Icon}
                                                            alt=""
                                                            src="/element4.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/microphone.svg"
                                                        />
                                                        <div className={styles.myBots}>My Bots</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/microphone2.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/identificationcard.svg"
                                                        />
                                                        <div className={styles.contacts}>Contacts</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/personalcard.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/calloutgoing.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/chart.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className={styles.frameChild1} />
                                                <div className={styles.frameContainer}>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.image43Icon}
                                                            alt=""
                                                            src="/image-43@2x.png"
                                                        />
                                                        <div className={styles.lightningParent}>
                                                            <img
                                                                className={styles.lightningIcon}
                                                                alt=""
                                                                src="/lightning.svg"
                                                            />
                                                            <div className={styles.discord}>Discord</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.coinsIcon}
                                                            alt=""
                                                            src="/coins.svg"
                                                        />
                                                        <div className={styles.creditsLeftWrapper}>
                                                            <div className={styles.discord}>
                                                                10 Credits left
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.myProfileParent}>
                                                        <div className={styles.myProfile}>My Profile</div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/vuesaxlinearprofilecircle.svg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.rectangleParent4}>
                                            <div className={styles.groupChild11} />
                                            <img
                                                className={styles.caretleftIcon}
                                                alt=""
                                                src="/caretleft.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.groupParent3}>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-73@2x.png"
                                />
                                <div className={styles.groupParent4}>
                                    <div className={styles.unionGroup}>
                                        <img
                                            alt=""
                                            src="/talk-on-web-icon.svg"
                                        />

                                        <img
                                            className={styles.unionIcon2}
                                            alt=""
                                            src="/union2.svg"
                                        />
                                        <img className={styles.playIcon} alt="" src="/play.svg" />
                                    </div>
                                    <div className={styles.talkOnWeb}>Talk on web</div>
                                </div>
                            </div>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-74@2x.png"
                                />
                                <div className={styles.phoneoutgoingParent}>
                                    <img
                                        className={styles.phoneoutgoingIcon}
                                        alt=""
                                        src="/phoneoutgoing.svg"
                                    />
                                    <div className={styles.talkOnWeb}>Talk on call</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.collectMissingInfo}>
                            Collect Missing Info
                        </div>
                    </div>
                    <div data-is="card" className={styles.dashboardGroup}>
                        <div className={styles.dashboard2}>
                            <div className={styles.dashboardChild} />
                            <div className={styles.dashboardItem} />
                            <div className={styles.screen}>
                                <div className={styles.dashboard1}>
                                    <div className={styles.dashboard1Inner}>
                                        <div className={styles.groupContainer}>
                                            <div className={styles.jumpstartWithOurTemplatesParent}>
                                                <div className={styles.jumpstartWithOur}>
                                                    Jumpstart with our Templates
                                                </div>
                                                <div className={styles.frameDiv}>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            Schedule Appointment Agent
                                                        </div>
                                                        <img
                                                            className={styles.image37Icon}
                                                            alt=""
                                                            src="/image-37@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>
                                                                Sales Lead Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image39Icon}
                                                            alt=""
                                                            src="/image-39@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>{`Collect `}</p>
                                                            <p className={styles.blankLine}>
                                                                Missing info Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image40Icon}
                                                            alt=""
                                                            src="/image-40@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>FAQ Agent</p>
                                                        </div>
                                                        <img
                                                            className={styles.image41Icon}
                                                            alt=""
                                                            src="/image-41@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.moreForYouParent}>
                                                <div className={styles.moreForYou}>More for you</div>
                                                <div className={styles.groupParent1}>
                                                    <div className={styles.vectorGroup}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-3.svg"
                                                        />
                                                        <img className={styles.ellipseIcon} alt="" />
                                                        <div className={styles.documentation}>
                                                            Documentation
                                                        </div>
                                                        <img
                                                            className={styles.iconDocument}
                                                            alt=""
                                                            src="/-icon-document.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.contactSupport}>
                                                            Contact Support
                                                        </div>
                                                        <img
                                                            className={styles.usercirclegearIcon}
                                                            alt=""
                                                            src="/usercirclegear.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.faqs}>FAQs</div>
                                                        <img
                                                            className={styles.vectorIcon}
                                                            alt=""
                                                            src="/vector.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.iconDocument1}
                                                            alt=""
                                                            src="/-icon-document1.svg"
                                                        />
                                                        <div className={styles.documentation1}>
                                                            Documentation
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.usercirclegearIcon1}
                                                            alt=""
                                                            src="/usercirclegear1.svg"
                                                        />
                                                        <div className={styles.contactSupport1}>
                                                            Contact support
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.vectorIcon1}
                                                            alt=""
                                                            src="/vector1.svg"
                                                        />
                                                        <div className={styles.platform}>FAQs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.groupParent2}>
                                        <div className={styles.rectangleParent1}>
                                            <div className={styles.groupChild5} />
                                            <div className={styles.rectangleParent2}>
                                                <div className={styles.frameItem} />
                                                <div className={styles.frameInner} />
                                                <div className={styles.groupWrapper}>
                                                    <div className={styles.unionParent}>
                                                        <div className={styles.union}>
                                                            <div className={styles.unionChild} />
                                                            <img className={styles.unionItem} alt="" />
                                                        </div>
                                                        <img
                                                            className={styles.unionIcon1}
                                                            alt=""
                                                            src="/union1.svg"
                                                        />
                                                        <div className={styles.rectangleParent3}>
                                                            <div className={styles.groupChild6} />
                                                            <div className={styles.groupChild7} />
                                                            <div className={styles.groupChild8} />
                                                            <div className={styles.groupChild9} />
                                                            <div className={styles.groupChild10} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.lineDiv} />
                                                <div className={styles.frameGroup}>
                                                    <div className={styles.templatesParent}>
                                                        <div className={styles.templates}>Templates</div>
                                                        <img
                                                            className={styles.element4Icon}
                                                            alt=""
                                                            src="/element4.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/microphone.svg"
                                                        />
                                                        <div className={styles.myBots}>My Bots</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/microphone2.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/identificationcard.svg"
                                                        />
                                                        <div className={styles.contacts}>Contacts</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/personalcard.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/calloutgoing.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/chart.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className={styles.frameChild1} />
                                                <div className={styles.frameContainer}>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.image43Icon}
                                                            alt=""
                                                            src="/image-431@2x.png"
                                                        />
                                                        <div className={styles.lightningParent}>
                                                            <img
                                                                className={styles.lightningIcon}
                                                                alt=""
                                                                src="/lightning.svg"
                                                            />
                                                            <div className={styles.discord}>Discord</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.coinsIcon}
                                                            alt=""
                                                            src="/coins.svg"
                                                        />
                                                        <div className={styles.creditsLeftWrapper}>
                                                            <div className={styles.discord}>
                                                                10 Credits left
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.myProfileParent}>
                                                        <div className={styles.myProfile}>My Profile</div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/vuesaxlinearprofilecircle.svg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.rectangleParent4}>
                                            <div className={styles.groupChild11} />
                                            <img
                                                className={styles.caretleftIcon}
                                                alt=""
                                                src="/caretleft.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.groupParent9}>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-73@2x.png"
                                />
                                <div className={styles.groupParent4}>
                                    <div className={styles.unionGroup}>
                                        <img
                                            alt=""
                                            src="/talk-on-web-icon.svg"
                                        />

                                        <img
                                            className={styles.unionIcon2}
                                            alt=""
                                            src="/union2.svg"
                                        />
                                        <img className={styles.playIcon} alt="" src="/play.svg" />
                                    </div>
                                    <div className={styles.talkOnWeb}>Talk on web</div>
                                </div>
                            </div>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-74@2x.png"
                                />
                                <div className={styles.phoneoutgoingParent}>
                                    <img
                                        className={styles.phoneoutgoingIcon}
                                        alt=""
                                        src="/phoneoutgoing.svg"
                                    />
                                    <div className={styles.talkOnWeb}>Talk on call</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.scheduleAppointmentAgent2}>
                            Schedule Appointment Agent
                        </div>
                    </div>
                    <div data-is="card" className={styles.dashboardContainer}>
                        <div className={styles.dashboard3}>
                            <div className={styles.dashboardChild2} />
                            <div className={styles.dashboardChild3} />
                            <div className={styles.screen2}>
                                <div className={styles.dashboard12}>
                                    <div className={styles.dashboard1Inner}>
                                        <div className={styles.groupContainer}>
                                            <div className={styles.jumpstartWithOurTemplatesParent}>
                                                <div className={styles.jumpstartWithOur}>
                                                    Jumpstart with our Templates
                                                </div>
                                                <div className={styles.frameDiv}>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            Schedule Appointment Agent
                                                        </div>
                                                        <img
                                                            className={styles.image37Icon}
                                                            alt=""
                                                            src="/image-371@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>
                                                                Sales Lead Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image39Icon}
                                                            alt=""
                                                            src="/image-391@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>{`Collect `}</p>
                                                            <p className={styles.blankLine}>
                                                                Missing info Agent
                                                            </p>
                                                        </div>
                                                        <img
                                                            className={styles.image40Icon}
                                                            alt=""
                                                            src="/image-401@2x.png"
                                                        />
                                                    </div>
                                                    <div className={styles.rectangleParent}>
                                                        <div className={styles.groupChild} />
                                                        <div className={styles.scheduleAppointmentAgent}>
                                                            <p className={styles.blankLine}>&nbsp;</p>
                                                            <p className={styles.blankLine}>FAQ Agent</p>
                                                        </div>
                                                        <img
                                                            className={styles.image41Icon}
                                                            alt=""
                                                            src="/image-411@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.moreForYouParent}>
                                                <div className={styles.moreForYou}>More for you</div>
                                                <div className={styles.groupParent1}>
                                                    <div className={styles.vectorGroup}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-3.svg"
                                                        />
                                                        <img className={styles.ellipseIcon} alt="" />
                                                        <div className={styles.documentation}>
                                                            Documentation
                                                        </div>
                                                        <img
                                                            className={styles.iconDocument}
                                                            alt=""
                                                            src="/-icon-document.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.contactSupport}>
                                                            Contact Support
                                                        </div>
                                                        <img
                                                            className={styles.usercirclegearIcon}
                                                            alt=""
                                                            src="/usercirclegear.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.vectorContainer}>
                                                        <img
                                                            className={styles.rectangleIcon}
                                                            alt=""
                                                            src="/rectangle-31.svg"
                                                        />
                                                        <div className={styles.ellipseDiv} />
                                                        <div className={styles.faqs}>FAQs</div>
                                                        <img
                                                            className={styles.vectorIcon}
                                                            alt=""
                                                            src="/vector.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.iconDocument1}
                                                            alt=""
                                                            src="/-icon-document1.svg"
                                                        />
                                                        <div className={styles.documentation1}>
                                                            Documentation
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.usercirclegearIcon1}
                                                            alt=""
                                                            src="/usercirclegear1.svg"
                                                        />
                                                        <div className={styles.contactSupport1}>
                                                            Contact support
                                                        </div>
                                                    </div>
                                                    <div className={styles.iconDocumentParent}>
                                                        <img
                                                            className={styles.vectorIcon1}
                                                            alt=""
                                                            src="/vector1.svg"
                                                        />
                                                        <div className={styles.platform}>FAQs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.groupParent2}>
                                        <div className={styles.rectangleParent1}>
                                            <div className={styles.groupChild5} />
                                            <div className={styles.rectangleParent2}>
                                                <div className={styles.frameItem} />
                                                <div className={styles.frameInner} />
                                                <div className={styles.groupWrapper}>
                                                    <div className={styles.unionParent}>
                                                        <div className={styles.union}>
                                                            <div className={styles.unionChild} />
                                                            <img className={styles.unionItem} alt="" />
                                                        </div>
                                                        <img
                                                            className={styles.unionIcon1}
                                                            alt=""
                                                            src="/union1.svg"
                                                        />
                                                        <div className={styles.rectangleParent3}>
                                                            <div className={styles.groupChild6} />
                                                            <div className={styles.groupChild7} />
                                                            <div className={styles.groupChild8} />
                                                            <div className={styles.groupChild9} />
                                                            <div className={styles.groupChild10} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.lineDiv} />
                                                <div className={styles.frameGroup}>
                                                    <div className={styles.templatesParent}>
                                                        <div className={styles.templates}>Templates</div>
                                                        <img
                                                            className={styles.element4Icon}
                                                            alt=""
                                                            src="/element4.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/microphone.svg"
                                                        />
                                                        <div className={styles.myBots}>My Bots</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/microphone2.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <img
                                                            className={styles.microphoneIcon}
                                                            alt=""
                                                            src="/identificationcard.svg"
                                                        />
                                                        <div className={styles.contacts}>Contacts</div>
                                                        <img
                                                            className={styles.microphone2Icon}
                                                            alt=""
                                                            src="/personalcard.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/calloutgoing.svg"
                                                        />
                                                    </div>
                                                    <div className={styles.microphoneParent}>
                                                        <div className={styles.callHistory}>
                                                            Call History
                                                        </div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/chart.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className={styles.frameChild1} />
                                                <div className={styles.frameContainer}>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.image43Icon}
                                                            alt=""
                                                            src="/image-432@2x.png"
                                                        />
                                                        <div className={styles.lightningParent}>
                                                            <img
                                                                className={styles.lightningIcon}
                                                                alt=""
                                                                src="/lightning.svg"
                                                            />
                                                            <div className={styles.discord}>Discord</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.upgradeParent}>
                                                        <div className={styles.upgrade}>Upgrade</div>
                                                        <img
                                                            className={styles.coinsIcon}
                                                            alt=""
                                                            src="/coins.svg"
                                                        />
                                                        <div className={styles.creditsLeftWrapper}>
                                                            <div className={styles.discord}>
                                                                10 Credits left
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.myProfileParent}>
                                                        <div className={styles.myProfile}>My Profile</div>
                                                        <img
                                                            className={styles.callOutgoingIcon}
                                                            alt=""
                                                            src="/vuesaxlinearprofilecircle.svg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.rectangleParent4}>
                                            <div className={styles.groupChild11} />
                                            <img
                                                className={styles.caretleftIcon2}
                                                alt=""
                                                src="/caretleft.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.groupParent15}>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-731@2x.png"
                                />
                                <div className={styles.groupParent4}>
                                    <div className={styles.unionGroup}>
                                        <img
                                            alt=""
                                            src="/talk-on-web-icon.svg"
                                        />
                                        <img
                                            className={styles.unionIcon2}
                                            alt=""
                                            src="/union2.svg"
                                        />
                                        <img className={styles.playIcon} alt="" src="/play.svg" />
                                    </div>
                                    <div className={styles.talkOnWeb}>Talk on web</div>
                                </div>
                            </div>
                            <div className={styles.ellipseParent}>
                                <img
                                    className={styles.groupChild12}
                                    alt=""
                                    src="/ellipse-741@2x.png"
                                />
                                <div className={styles.phoneoutgoingParent}>
                                    <img
                                        className={styles.phoneoutgoingIcon}
                                        alt=""
                                        src="/phoneoutgoing.svg"
                                    />
                                    <div className={styles.talkOnWeb}>Talk on call</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.salesLeadAgent3}>Sales Lead Agent</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
