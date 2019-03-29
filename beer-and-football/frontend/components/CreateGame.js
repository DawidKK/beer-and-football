import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import Form from './styles/Form';
import { ALL_GAMES_QUERY } from './Games';

const CREATE_GAME_MUTATION = gql`
  mutation CREATE_GAME_MUTATION(
    $city: String!
    $street: String!
    $date: String!
    $hour: String!
    $players: Int!
    $description: String!
  ) {
    createGame(
      city: $city
      street: $street
      date: $date
      hour: $hour
      players: $players
      description: $description
    ) {
      id
    }
  }
`;

class CreateGame extends Component {
  state = {
    city: '',
    street: '',
    date: '',
    hour: '',
    players: 0,
    description: ''
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  render() {
    return (
      <Mutation
        variables={this.state}
        mutation={CREATE_GAME_MUTATION}
        refetchQueries={[{ query: ALL_GAMES_QUERY }]}
      >
        {(createGame, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createGame();

              Router.push({
                pathname: '/game',
                query: { id: res.data.createGame.id }
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="city">
                Miasto
                <input
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="city"
                  id="city"
                  type="text"
                />
              </label>
              <label htmlFor="street">
                Ulica
                <input
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="street"
                  id="street"
                  type="text"
                />
              </label>
              <label htmlFor="date">
                Data
                <input
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="date"
                  id="date"
                  type="text"
                />
              </label>
              <label htmlFor="hour">
                Godzina
                <input
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="hour"
                  id="hour"
                  type="text"
                />
              </label>
              <label htmlFor="players">
                Liczba potrzebnych graczy
                <input
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="players"
                  id="players"
                  type="number"
                />
              </label>
              <label htmlFor="description">
                Opis
                <textarea
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                />
              </label>
              <input type="submit" value="Wyślij" />
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateGame;
