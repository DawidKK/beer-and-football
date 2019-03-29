import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { ALL_GAMES_QUERY } from './Games';

import Button from './styles/Button';

const DELETE_GAME_MUTATION = gql`
  mutation DELETE_GAME_MUTATION($id: ID!) {
    deleteGame(id: $id) {
      id
    }
  }
`;

class DeleteGame extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_GAMES_QUERY });
    console.log('data', data);

    data.games = data.games.filter(game => game.id !== payload.data.deleteGame.id);

    //3. Dodanie nowych odfiltrowanych Itemów do cache
    cache.writeQuery({ query: ALL_GAMES_QUERY, data });
  };
  render() {
    return (
      <Mutation
        update={this.update}
        mutation={DELETE_GAME_MUTATION}
        variables={{ id: this.props.id }}
      >
        {(deleteItem, { error }) => (
          <Button
            onClick={() => {
              if (confirm('Na pewno usunąć grę?')) {
                deleteItem().catch(err => {
                  alert(err.message);
                });

                Router.push({
                  pathname: '/index'
                });
              }
            }}
          >
            {this.props.children}
          </Button>
        )}
      </Mutation>
    );
  }
}

export default DeleteGame;
