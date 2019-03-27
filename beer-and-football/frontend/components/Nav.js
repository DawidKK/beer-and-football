import React from 'react';
import Link from 'next/link';

import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
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
        <Link href="/index">
          <a>Moje meczyki</a>
        </Link>
      </li>
    </NavStyles>
  );
};

export default Nav;
