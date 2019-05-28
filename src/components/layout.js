import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';
import MainNavigation from 'src/components/molecules/MainNavigation/MainNavigation';
import IndexPage from 'src/pages/index';

const Layout = ({ children }) => (
  <IndexPage>
    <MainNavigation />
    {children}
  </IndexPage>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
