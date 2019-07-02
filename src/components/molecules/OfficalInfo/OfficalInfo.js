import React from 'react';
import styled, { keyframes } from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import SubHeading from 'src/components/atoms/SubHeading/SubHeading';

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 150px;
`;

const growing = keyframes`
  from {
    width: 0;
  }

  to {
    width: 40%;
  }
`;

const StyledHeading = styled(Heading)`
  font-weight: 300;
  margin: 0 0 50px;
  font-size: 25px;
  position: relative;

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

const StyledSubHeading = styled(SubHeading)`
  font-weight: 200;
  margin: 0 0 5px;
  font-size: 35px;
  font-family: 'Rozha One', sans-serif;
  letter-spacing: 2px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 200;
  color: inherit;
  font-family: 'Montserrat';
  margin: 0 0 50px;
  font-size: 25px;
  position: relative;

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

const OfficalInfo = () => (
  <StyledInnerWrapper>
    <StyledSubHeading>Phone</StyledSubHeading>
    <StyledHeading> +48 795611325 </StyledHeading>
    <StyledSubHeading>E-mail</StyledSubHeading>
    <StyledHeading> j.krezolek@gmail.com </StyledHeading>
    <StyledSubHeading>LinkedIn</StyledSubHeading>
    <StyledLink href="https://www.linkedin.com/in/joanna-krężołek">
      https://www.linkedin.com/in/joanna-krężołek
    </StyledLink>
    <StyledSubHeading>Github</StyledSubHeading>
    <StyledLink href=" https://github.com/nicolaskimm">
      https://github.com/nicolaskimm
    </StyledLink>
  </StyledInnerWrapper>
);

export default OfficalInfo;
