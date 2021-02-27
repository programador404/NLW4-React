import React, { useEffect, useState } from 'react';

import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
  const [time, setTime] = useState(20 * 60);
  const [activity, setActivity] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split('');

  useEffect(() => {
    if (activity && time > 0) {
      setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    }
  }, [activity, time]);

  function startCountDown() {
    setActivity(true);
  }

  return (
    <div>

      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button type="button" className={styles.countDownButton} onClick={() => startCountDown()}>
        Iniciar
      </button>
    </div>
  );
}