import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from './styles/Form';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
class Signup extends Component {
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
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
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
                <h2>Zarejestruj się</h2>
                <Error error={error} />
                <label htmlFor="name">
                  Imię
                  <input
                    onChange={this.saveToSate}
                    type="text"
                    name="name"
                    value={this.state.name}
                  />
                </label>
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
                <input type="submit" value="Zarejestruj się" />
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signup;
