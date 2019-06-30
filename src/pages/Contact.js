import React from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import Heading from 'src/components/atoms/Heading/Heading';
import SubHeading from 'src/components/atoms/SubHeading/SubHeading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 130px;
`;

const StyledInnerWrapper = styled.div`
  ${({ info }) =>
    info &&
    css`
      display: flex;
      flex-direction: column;
      padding: 100px 0 0 150px;
    `}
`;

const StyledHeading = styled(Heading)`
  font-weight: 300;
  margin: 0 0 50px;
  font-size: 25px;

  ${({ nav }) =>
    nav &&
    css`
      font-size: 40px;
      margin: 0 0 10px;
    `}
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
`;

const Contact = () => {
  return (
    <Layout>
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledHeading nav>OFFICAL</StyledHeading>
          <StyledHeading nav>NOT SO OFFICAL</StyledHeading>
        </StyledInnerWrapper>
        <StyledInnerWrapper info>
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
      </StyledWrapper>
    </Layout>
  );
};

export default Contact;
