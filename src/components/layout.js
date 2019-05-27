import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import './layout.css';
import GlobalStyle from 'src/theme/GlobalStyle';
import { theme } from 'src/theme/MainTheme';
import Heading from 'src/components/atoms/Heading/Heading';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Heading> Joanna Krężołek </Heading>
        {children}
      </>
    </ThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
