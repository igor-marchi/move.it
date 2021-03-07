import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src='http://github.com/igor-marchi.png' alt='Imagem de perfil' />
      <div>
        <strong>Igor Marchi</strong>
        <p>
          <img src='icons/level.svg' alt='Ícone level up' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
