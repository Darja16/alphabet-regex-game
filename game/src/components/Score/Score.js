import React, {Component} from 'react';

import {GameContext} from '../../contexts/GameContext';

import styles from './Score.module.css';

class Score extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {(context) => {
          const {score} = context;
          return (
            <div className={styles.container}>
              <p>SCORE</p>
              <div className={`${styles.info} ${styles.hit}`}>HIT: {score.hit}</div>
              <div className={`${styles.info} ${styles.miss}`}>MISS: {score.miss}</div>
              <div className={`${styles.info} ${styles.left}`}>LEFT: {score.left}</div>
            </div>
          );
        }}
      </GameContext.Consumer>
    );
  }
}

export default Score;
