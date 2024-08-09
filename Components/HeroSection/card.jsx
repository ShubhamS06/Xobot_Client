import { useState, useEffect, useRef } from "react";
import VoiceChat from "./VoiceChat";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './Dialog'

import { Input } from "./Input";
import { Button } from '@nextui-org/react'

export default function Card({ id, title, styles }) {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');
  const [callDialog, setCallDialog] = useState(false);
  const [callProgress, setCallProgress] = useState(false);
  const [callSuccess, setCallSuccess] = useState(false);
  const [callFail, setCallFail] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const chatRef = useRef(null);
  
  useEffect(() => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 900);
    }
  }, [messages]);

  useEffect(() => {
    if (!showChat) {
      setMessages([]);
    }
  }, [showChat]);

  const makeCall = (number) => {
    if (!number) {
      setCallFail(true);
      return;
    }
    setCallProgress(true);
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/voice`;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          bot_id: id,
          to_number: number,
          account_id: 'guest'
        }
      )
    })
      .then(x => x.json())
      .then(y => {
        setCallProgress(false);
        setCallSuccess(true);
      })
      .catch(reason => {
        setCallProgress(false);
        setCallFail(true);
      })

  };

  const onCallChange = () => {
    setCallDialog(true);
  };

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
            <div className={styles.chatRoot} ref={chatRef}>
              <div className={styles.chatHeader}>
                <span className={styles.greenDot}>● </span> Browser call in
                progress!
              </div>

              <div className={styles.chatGroup}>
                {messages.map((chat, index) => (
                  <div
                    key={index}
                    className={
                      chat.role == 'user' ? styles.chatRight : styles.chatLeft
                    }
                  >
                    {chat.content}
                  </div>
                ))}
              </div>

              <div className={styles.chatAction}>
                <img
                  onClick={() => setShowChat(false)}

                  style={{ cursor: 'pointer' }}
                  src="/pause-bg.svg" alt="" />
                <span>{status}...</span>
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
                  <div
                    onClick={onCallChange}
                    className={styles.phoneoutgoingParent}>
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
          <VoiceChat id={id} sendMessages={setMessages} sendStatus={setStatus} showChatStatus={showChat}></VoiceChat>
          <div>
            <Dialog open={callDialog} onOpenChange={setCallDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enter Phone Number</DialogTitle>
                  <DialogDescription>
                    Enter full phone number including + and country code
                  </DialogDescription>
                </DialogHeader>
                <Input
                  type='tel'
                  required={true}
                  value={phoneInput}
                  placeholder="+1xxxxxxxxxx"
                  onChange={(e) => setPhoneInput(e.target.value)}
                />
                <DialogFooter className="items-center">
                  <Button
                    type='button'
                    className='bg-green-500 text-white px-4 py-2 rounded-md text-sm'
                    onClick={() => {
                      makeCall(phoneInput)
                      setCallDialog(false)
                    }}
                  >
                    Call Now
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog open={callProgress} onOpenChange={setCallProgress}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Call in Progress</DialogTitle>
                  <DialogDescription>
                    Your call is in progress. Please wait...
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog open={callSuccess} onOpenChange={setCallSuccess}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Call Success</DialogTitle>
                  <DialogDescription>
                    The number should receive a call shortly.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog open={callFail} onOpenChange={setCallFail}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Call Failed</DialogTitle>
                  <DialogDescription>
                    Call failed. Please try again.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
