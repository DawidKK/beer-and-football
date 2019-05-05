import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { me } }) => (
        <>
          {me && (
            <NavStyles>
              <li>
                <Link href="/index">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/create">
                  <a>Zorganizuj meczyk</a>
                </Link>
              </li>
              <li>
                <Link href="/userpanel">
                  <a>Moje meczyki</a>
                </Link>
              </li>
            </NavStyles>
          )}
        </>
      )}
    </Query>
  );
};

export default Nav;
