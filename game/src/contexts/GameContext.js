import React, {Component, createContext} from 'react';

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
    this.setState({score});
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
