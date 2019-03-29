import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import GamePanel from './GamePanel';
import Title from './styles/Title';

const GamesList = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ALL_GAMES_QUERY = gql`
  query ALL_GAMES_QUERY {
    games {
      id
      city
      street
      date
      hour
      players
      description
    }
  }
`;

class Games extends Component {
  render() {
    return (
      <>
        <Title>Lista meczy, do kórych możesz dołączyć</Title>
        <Query query={ALL_GAMES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;

            return (
              <GamesList>
                {data.games.map(game => (
                  <GamePanel game={game} key={game.id} />
                ))}
              </GamesList>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Games;
export { ALL_GAMES_QUERY };
