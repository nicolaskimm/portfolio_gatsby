import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainNavigation from 'src/components/molecules/MainNavigation/MainNavigation';
import IndexPage from 'src/pages';

const StyledWrapper = styled.div`
  padding: 0 50px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isLight }) => (isLight ? 'flex-end' : 'flex-start')};
  padding: 0 5px;
  width: 50px;
  height: 20px;
  border: 2px solid ${({ isLight }) => (isLight ? 'black' : 'white')};
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 10px;
  height: 10px;
  background-color: ${({ isLight }) => (isLight ? 'black' : 'white')};
  border: none;
  border-radius: 100%;
`;

const Layout = props => (
  <IndexPage>
    <StyledWrapper>
      <StyledNavigation>
        <StyledButtonWrapper>
          <StyledButton type="button" />
        </StyledButtonWrapper>
        <MainNavigation
          first="Home"
          second="Projects"
          third="Contact"
          fourth="Projects2"
        />
      </StyledNavigation>
      {props.children}
    </StyledWrapper>
  </IndexPage>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
