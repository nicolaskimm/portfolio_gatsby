import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  padding: 5px 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding-bottom: 5px;
  margin: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: lowercase;
  text-decoration: none;

  &:hover {
    border-bottom: 5px solid black;
  }
`;

const MainNavigation = () => {
  return (
    <StyledList>
      <StyledLink to="/Home">home</StyledLink>
      <StyledLink to="/About">about</StyledLink>
      <StyledLink to="/Projects">projects</StyledLink>
      <StyledLink to="/Contact">contact</StyledLink>
    </StyledList>
  );
};

export default MainNavigation;
