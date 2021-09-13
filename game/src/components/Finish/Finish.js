import React, {Component} from 'react';

import {GameContext} from '../../contexts/GameContext';

import styles from './Finish.module.css';

class Finish extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {(context) => {
          const {score, player} = context;
          const win = score.left ? false : score.hit > score.miss;
          return (
            <div className={styles.container}>
              {win ? (
                <p style={{color: 'green'}}>Congratulation {player.name}</p>
              ) : (
                <p style={{color: 'red'}}>Wish you {player.name} more luck next time!</p>
              )}
            </div>
          );
        }}
      </GameContext.Consumer>
    );
  }
}

export default Finish;
