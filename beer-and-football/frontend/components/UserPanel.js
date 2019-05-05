import React, { Component } from 'react';
import styled from 'styled-components';

import User from './User';
import GamePanel from './GamePanel';
import Title from './styles/Title';

const GamesList = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

class UserPanel extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => {
          if (me) {
            return (
              <>
                <Title>Wszystkie Twoje gry {me.name}</Title>
                <GamesList>
                  {me.games.map(game => (
                    <GamePanel game={game} key={game.id} />
                  ))}
                </GamesList>
              </>
            );
          }
          return <p>Brak meczyków - dołącz lub utwórz grę!</p>;
        }}
      </User>
    );
  }
}

export default UserPanel;
