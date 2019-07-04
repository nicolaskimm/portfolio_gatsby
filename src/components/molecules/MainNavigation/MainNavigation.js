import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLink from 'src/components/atoms/NavLink/NavLink';

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0 20px;
  color: inherit;
`;

const MainNavigation = props => (
  <StyledList>
    <StyledLink to={`/${props.first}`}>{props.first}</StyledLink>
    <StyledLink to={`/${props.second}`}>{props.second}</StyledLink>
    <StyledLink to={`/${props.third}`}>{props.third}</StyledLink>
    <StyledLink to={`/${props.fourth}`}>{props.fourth}</StyledLink>
  </StyledList>
);

MainNavigation.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
};

export default MainNavigation;
