import React from 'react';
import styled, { keyframes } from 'styled-components';
import SubHeading from 'src/components/atoms/SubHeading/SubHeading';

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 150px;
`;

const StyledSubHeading = styled(SubHeading)`
  font-weight: 200;
  margin: 0 0 5px;
  font-size: 35px;
  font-family: 'Rozha One', sans-serif;
  letter-spacing: 2px;
`;

const growing = keyframes`
  from {
    width: 0;
  }

  to {
    width: 40%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 200;
  color: inherit;
  font-family: 'Montserrat';
  margin: 0 20px 50px 0;
  font-size: 25px;
  position: relative;
  transition: all 3s;

  &:hover {
    &:before {
      content: '';
      animation: ${growing} 0.3s linear;
      display: block;
      width: 40%;
      height: 7px;
      background-color: #b26065;
      position: absolute;
      top: 13px;
      z-index: -99;
    }
  }
`;

const NotOfficalInfo = () => (
  <StyledInnerWrapper>
    <StyledSubHeading>Facebook</StyledSubHeading>
    <StyledLink href="https://www.facebook.com/j.krezolek">
      facebook.com/j.krezolek
    </StyledLink>
    <StyledSubHeading>Instagram</StyledSubHeading>
    <StyledLink href="https://www.instagram.com/ednickk/">
      instagram.com/ednickk/
    </StyledLink>

    <StyledSubHeading>Steam</StyledSubHeading>
    <StyledLink href="https://steamcommunity.com/id/nicolaskimm">
      steamcommunity.com/id/nicolaskimm
    </StyledLink>

    <StyledSubHeading>BoardGameGeek</StyledSubHeading>
    <StyledLink href="https://boardgamegeek.com/user/nicolaskim">
      boardgamegeek.com/user/nicolaskim
    </StyledLink>
  </StyledInnerWrapper>
);

export default NotOfficalInfo;
