import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Title from './styles/Title';
import { SINGLE_GAME_QUERY } from './SingleGame';
import { ALL_GAMES_QUERY } from './SingleGame';

const UPDATE_GAME_MUTATION = gql`
  mutation UPDATE_GAME_MUTATION(
    $id: ID!
    $city: String
    $street: String
    $date: String
    $hour: String
    $players: Int
    $description: String
  ) {
    updateGame(
      id: $id
      city: $city
      street: $street
      date: $date
      hour: $hour
      players: $players
      description: $description
    ) {
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

class UpdateGame extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  updateGame = async (e, updateGameMutation) => {
    e.preventDefault();
    const res = await updateGameMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
  };

  render() {
    return (
      <Query query={SINGLE_GAME_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.game) return <p>Nic nie ma...</p>;

          const { city, street, date, hour, players, description } = data.game;
          return (
            <>
              <Title>Edycja gry</Title>
              <Mutation variables={this.state} mutation={UPDATE_GAME_MUTATION}>
                {(updateGame, { loading, error }) => (
                  <Form onSubmit={e => this.updateGame(e, updateGame)}>
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="city">
                        Miasto
                        <input
                          required
                          defaultValue={city}
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
                          defaultValue={street}
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
                          defaultValue={date}
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
                          defaultValue={hour}
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
                          defaultValue={players}
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
                          defaultValue={description}
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
            </>
          );
        }}
      </Query>
    );
  }
}

export default UpdateGame;
