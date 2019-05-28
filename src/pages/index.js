import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/theme/GlobalStyle';
import { theme } from 'src/theme/MainTheme';

const IndexPage = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </div>
);

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexPage;
