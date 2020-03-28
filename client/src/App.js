import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddPlayer from './views/AddPlayer';
import PlayersList from './views/PlayerList';
import MainHeading from './views/MainHeading';
import PlayerStatus from './views/PlayerStatus';


export default () => {
  return (
    <div className="App">
      <MainHeading />
      <Router>
        <PlayersList path="/" />
        <PlayersList path="/players/list" />
        <AddPlayer path="/players/addplayer" />
        <PlayerStatus path="/status/game/1" />
      </Router>
    </div>
  );
}