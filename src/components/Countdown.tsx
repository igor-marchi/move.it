import { useEffect, useState } from 'react';
import { setTimeout } from 'timers';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(30 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  function startCountdown() {
    active == true ? setActive(false) : setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {active ? (
        <button
          type='button'
          className={styles.countdownButtonPause}
          onClick={startCountdown}
        >
          Pausar ciclo
        </button>
      ) : (
        <button
          type='button'
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
}
