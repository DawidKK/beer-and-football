import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  white: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0, 0.09)',
  bgDark: '#151935',
  bgLight: '#1b223e',
  accentColor: '#ffe400'
};

const StyledPage = styled.div`
  color: ${props => props.theme.white};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.eot'); /* IE9 Compat Modes */
      src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.woff') format('woff'), /* Modern Browsers */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.svg#SourceSansPro') format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.eot'); /* IE9 Compat Modes */
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.woff') format('woff'), /* Modern Browsers */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 2;
        font-family: 'Source Sans Pro';
        background: ${theme.bgDark};
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
