import React from 'react';
import Games from '../components/Games';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../components/User';

const Home = () => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { me } }) => (
        <>
          {!me && (
            <>
              <Signin />
              <Signup />
            </>
          )}

          {me && <Games />}
        </>
      )}
    </Query>
  );
};

export default Home;
