import React, { useState, useEffect } from 'react';

const TypingAnnimatText = ({ textArray, period }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(20);
  
    useEffect(() => {
      const handleTyping = () => {
        const i = loopNum % textArray.length;
        const fullTxt = textArray[i];
  
        setText(isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1));
  
        if (!isDeleting && text === fullTxt) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(20);
        } else {
          setDelta(20);
        }
      };
  
      const ticker = setTimeout(handleTyping, delta);
  
      return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum, delta, textArray, period]);
  
    return (
        <span>{text}</span>
    );
  };
  
export default TypingAnnimatText;
