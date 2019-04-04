import React from 'react';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyles from './styles/HeaderStyles';
import User from './User';
import Signout from './Signout';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <img src="../static/img/logo.png" alt="logo beer and football" />
        <p className="sub-title">Beer & Football</p>
        <User>
          {({ data: { me } }) => {
            if (me) {
              return (
                <>
                  <p className="login-name">
                    Siemasz {me.name}! <br />
                    <Signout />
                  </p>
                </>
              );
            }
            return null;
          }}
        </User>
      </HeaderStyles>
      <Nav />
    </>
  );
};

export default Header;
