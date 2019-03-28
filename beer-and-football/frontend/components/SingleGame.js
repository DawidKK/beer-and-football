import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import styled from 'styled-components';
import Error from './ErrorMessage';
import Title from './styles/Title';

const SINGLE_GAME_QUERY = gql`
  query SINGLE_GAME_QUERY($id: ID!) {
    game(where: { id: $id }) {
      city
      street
      date
      hour
      players
      description
    }
  }
`;

const GameDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;

  .title-title {
    width: 150px;
  }

  .title-detail {
    font-weight: normal;
    color: ${props => props.theme.accentColor};
  }
`;

class SingleGame extends Component {
  render() {
    return (
      <Query query={SINGLE_GAME_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          const game = data.game;
          return (
            <>
              <Title>Szczegóły gry</Title>
              <GameDetail>
                <div className="title-title">Miasto:</div>
                <div className="title-detail">{game.city}</div>
              </GameDetail>
              <GameDetail>
                <div className="title-title">Ulica:</div>
                <div className="title-detail">{game.street}</div>
              </GameDetail>
              <GameDetail>
                <div className="title-title">Data:</div>
                <div className="title-detail">{game.date}</div>
              </GameDetail>
              <GameDetail>
                <div className="title-title">Godzina:</div>
                <div className="title-detail">{game.hour}</div>
              </GameDetail>
              <GameDetail>
                <div className="title-title">Potrzebnych graczy:</div>
                <div className="title-detail">{game.players}</div>
              </GameDetail>
              <GameDetail>
                <div className="title-title">Opis:</div>
                <div className="title-detail">{game.description}</div>
              </GameDetail>
            </>
          );
        }}
      </Query>
    );
  }
}

export default SingleGame;
