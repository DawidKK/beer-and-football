import React from 'react';
import SingleGame from '../components/SingleGame';
const Game = props => {
  return <SingleGame id={props.query.id} />;
};

export default Game;
