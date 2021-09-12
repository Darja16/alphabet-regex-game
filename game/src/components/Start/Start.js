import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {GameContext} from '../../contexts/GameContext';

import styles from './Start.module.css';

class Start extends Component {
  state = {
    player: {
      name: '',
      mode: ''
    },
    timer: 0
  };

  handleNameChange = (event) => {
    this.setState((prevState) => ({
      player: {
        ...prevState.player,
        name: event.target.value
      }
    }));
  };

  handleModeChange = (event) => {
    this.setState((prevState) => ({
      player: {
        ...prevState.player,
        mode: event.target.value
      }
    }));
  };

  static contextType = GameContext;
  render() {
    return (
      <GameContext.Consumer>
        {(context) => {
          const {setPlayer} = context;
          return (
            <div className={styles.container}>
              <label>
                NAME
                <input
                  placeholder='Type your name'
                  required
                  type='text'
                  onChange={this.handleNameChange}
                />
              </label>
              <label>
                SELECT MODE
                <select name='Motivation' required onChange={this.handleModeChange}>
                  <option value='' disabled selected>
                    Select your option
                  </option>
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
                </select>
              </label>
              <button onClick={() => setPlayer(this.state.player)}>
                <Link to='/game'>START</Link>
              </button>
            </div>
          );
        }}
      </GameContext.Consumer>
    );
  }
}

export default Start;
