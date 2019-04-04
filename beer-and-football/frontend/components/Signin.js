import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
class Signin extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  saveToSate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({
                  name: '',
                  email: '',
                  password: ''
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Zaloguj się</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    onChange={this.saveToSate}
                    type="email"
                    name="email"
                    value={this.state.email}
                  />
                </label>
                <label htmlFor="password">
                  Hasło
                  <input
                    onChange={this.saveToSate}
                    type="password"
                    name="password"
                    value={this.state.password}
                  />
                </label>
                <input type="submit" value="Zaloguj się" />
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signin;
