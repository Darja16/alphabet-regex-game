import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {GameContext} from '../../contexts/GameContext';

import Score from '../Score/Score';
import {alphabet, shuffle} from './utils';
import styles from './Game.module.css';

class Game extends Component {
  state = {
    time: 0,
    shuffledArray: [],
    display: '',
    score: {
      hit: 0,
      miss: 0,
      left: 26
    },
    endGame: false
  };

  componentDidMount() {
    const shuffled = shuffle();
    this.setState({shuffledArray: shuffled});
  }

  handleStart = () => {
    let value = this.context;

    for (const i in this.state.shuffledArray) {
      setTimeout(() => {
        this.setState({
          display: this.state.shuffledArray[i].number
        });
        if (i === 26) {
          // redirection ne radi..
          alert('There is no time!');
        }

        /*
          trenutno se ne dobija miss poen kad prodje 5/3.5/2 sekunde
          pokusala sam addEventListener da dodam ovde i na svaku promenu i 
          ako nije uneto slovo, da dobijem miss i smanjim left

          medjutim state mi se update-uje mnogo vise puta
          npr prvi potez, prvi hit
            hit: 1
            miss: 0
            left: 25
            drugi potez, prvi miss
            hit: 1
            miss: 2
            left: 23
        */
      }, value.timer * i);
    }

    const inputField = document.getElementById('inputField');
    inputField.addEventListener(
      'keyup',
      (event) => {
        const letter = event.key;
        const obj = this.state.shuffledArray.find(
          (element) => element.number === this.state.display
        );

        const element = document.getElementById(obj.text);

        if (obj.text.toLowerCase() === letter) {
          element.style.backgroundColor = 'green';
          inputField.value = '';
          this.setState((prevState) => ({
            score: {
              ...prevState.score,
              left: prevState.score.left - 1,
              hit: prevState.score.hit + 1
            }
          }));
        } else {
          element.style.backgroundColor = 'red';
          inputField.value = '';
          this.setState((prevState) => ({
            score: {
              ...prevState.score,
              left: prevState.score.left - 1,
              miss: prevState.score.miss + 1
            }
          }));
        }
        value.changeScore(this.state.score);
      },
      false
    );
  };

  render() {
    const options = alphabet;
    return (
      <GameContext.Consumer>
        {(context) => {
          const {player} = context;
          return (
            <>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  <h2>
                    Hi {player.name}, Welcome to {player.mode} mode of Alphabet Regex Game
                  </h2>
                </div>
                <div className={styles.wrapper}>
                  <button onClick={() => this.handleStart()}>START GAME</button>
                  <button onClick={() => window.location.reload()}>
                    <Link to='/'>RESTART GAME</Link>
                  </button>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.innerContainer}>
                    <div className={styles.display}>
                      <h1>{this.state.display}</h1>
                    </div>
                    <input
                      id='inputField'
                      type='text'
                      className={styles.inputField}
                      placeholder='Input letter'
                    />
                    <Score />
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div id={styles.lettersAndNumbers}>
                    {options.map((option) => (
                      <div key={option.number} className={styles.letter} id={`${option?.text}`}>
                        {option.text} ({option.number})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </GameContext.Consumer>
    );
  }
}

Game.contextType = GameContext;

export default Game;
