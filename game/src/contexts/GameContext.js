import React, {Component, createContext} from 'react';
import {Redirect} from 'react-router-dom';
import {setTimer} from '../components/Game/utils';

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    player: {
      name: 'player',
      mode: 'easy'
    },
    score: {
      hit: 0,
      miss: 0,
      left: 26
    },
    timer: 5000
  };

  setPlayer = (player) => {
    this.setState({player});
    const timer = setTimer(player.mode);
    this.setState({timer});
  };

  changeScore = (score) => {
    if (score.left >= 0 && score.miss + score.hit <= 26) {
      this.setState({score});
    } else {
      // redirection not working, added alert instead
      alert('The end!');
      <Redirect to='/end' />;
    }
  };

  render() {
    return (
      <GameContext.Provider
        value={{...this.state, setPlayer: this.setPlayer, changeScore: this.changeScore}}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
