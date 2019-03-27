import React from 'react';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyles from './styles/HeaderStyles';

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
        <p>Beer & Football</p>
      </HeaderStyles>
      <Nav />
    </>
  );
};

export default Header;
