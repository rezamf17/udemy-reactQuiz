import React, { useState, useEffect } from 'react';

export default function Question(){
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
      if (timeLeft === 0) return;
      
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
    }, [timeLeft]);
  
    const percentage = (timeLeft / 10) * 100;
    return (
        <div id="question">
            <progress value={percentage} max="100" className={timeLeft === 0 ? 'answered' : ''}></progress>
            <h2>question</h2>
        </div>
    )
}