import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import GameContextProvider from './contexts/GameContext';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import Finish from './components/Finish/Finish';

const App = () => (
  <BrowserRouter>
    <GameContextProvider>
      <Route path='/' exact render={() => <Start />} />
      <Route path='/game' exact render={() => <Game />} />
      <Route path='/end' exact render={() => <Finish />} />
    </GameContextProvider>
  </BrowserRouter>
);

export default App;
