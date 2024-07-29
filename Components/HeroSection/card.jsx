import { useState } from "react";

export default function Card({ styles, title }) {
  const [showChat, setShowChat] = useState(false);
  const chats = [
    { content: "hello! how are you?", isCurrentUser: false },
    { content: "i'm good, thanks!", isCurrentUser: true },
    {
      content: "Are you interested in buying a property?",
      isCurrentUser: false
    },
    {
      content:
        "Yes, I'm interested but looking for something that fits in my budget",
      isCurrentUser: true
    }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardInner}>
          <div className={styles.cardTopTitle}>Talk to Xobot</div>
          <div className={styles.cardTitle}>
            {showChat && (
              <img
                tabIndex={0}
                onClick={() => setShowChat(false)}
                src="/back-arrow.svg"
                className={styles.cardTitleBack}
              />
            )}{" "}
            {title}
          </div>

          {showChat ? (
            <div className={styles.chatRoot}>
              <div className={styles.chatHeader}>
                <span className={styles.greenDot}>● </span> Browser call in
                progress!
              </div>

              <div className={styles.chatGroup}>
                {chats.map((chat, index) => (
                  <div
                    key={index}
                    className={
                      chat.isCurrentUser ? styles.chatRight : styles.chatLeft
                    }
                  >
                    {chat.content}
                  </div>
                ))}
              </div>

              <div className={styles.chatAction}>
                <img src="/pause-bg.svg" alt="" />
                <span>Listening</span>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.cardContent}>
                <div className={styles.playIconParent}>
                  <div className={styles.playIconGroup}>
                    <img
                      className={styles.playIconGroupBG}
                      alt=""
                      src="/gradientBg.jpg"
                    />
                    <img
                      className={styles.playIconBg}
                      alt=""
                      src="/playBg_greenGray.svg"
                    />
                    <img
                      tabIndex={0}
                      onClick={() => setShowChat(true)}
                      className={styles.playIconImg}
                      alt=""
                      src="/play.svg"
                    />
                  </div>
                </div>
                <div className={styles.middleText}>Click to talk</div>
                <div className={styles.iconRoot}>
                  <img
                    className={styles.iconBg}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
