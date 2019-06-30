import React from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import Heading from 'src/components/atoms/Heading/Heading';
import SubHeading from 'src/components/atoms/SubHeading/SubHeading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  padding: 0 30px;
`;

const StyledLeftWrapper = styled.div`
  height: 400px;
  margin: 0 30px 0 0;
  position: sticky;
  top: 200px;
`;

const StyledHeading = styled(Heading)`
  font-family: 'Rozha One', serif;
  font-weight: 400;
  line-height: 120px;
  font-size: 130px;
  margin: 0;

  ${({ first }) =>
    first &&
    css`
      line-height: 0;
      font-size: 40px;
      margin: 0 0 15px;
      padding-left: 30px;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 60px;
  margin-bottom: 200px;
  line-height: 80px;

  ${({ sectionParagraph }) =>
    sectionParagraph &&
    css`
      font-size: 30px;
      line-height: 40px;
      font-weight: 400;
      margin: 0;
    `}
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 70px;
  color: #b26065;
`;

const StyledSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 400px auto;
  margin-bottom: 150px;
  position: relative;
`;

const StyledSubHeading = styled(SubHeading)`
  margin: 0 60px 0 0;
  z-index: 1;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 8px;
    display: block;
    width: 80px;
    height: 20px;
    background-color: #b26065;
  }
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  font-size: 30px;
  list-style-type: none;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <Layout>
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledHeading first>Hey, my name is</StyledHeading>
          <StyledHeading>Joasia Krężołek</StyledHeading>
        </StyledLeftWrapper>

        <StyledRightWrapper>
          <StyledParagraph>
            I am junior <StyledSpan>front end developer</StyledSpan> based in{' '}
            <StyledSpan>Warsaw.</StyledSpan> Currently I am looking for my first
            job, after <StyledSpan>2 years</StyledSpan> of self-development.
          </StyledParagraph>
          <StyledSection>
            <StyledSubHeading>Technologies I know</StyledSubHeading>
            <StyledList>
              <StyledListItem>HTML5</StyledListItem>
              <StyledListItem>CSS3</StyledListItem>
              <StyledListItem>Javascript</StyledListItem>
              <StyledListItem>React</StyledListItem>
              <StyledListItem>Redux</StyledListItem>
              <StyledListItem>Styled Components</StyledListItem>
            </StyledList>
          </StyledSection>
          <StyledSection>
            <StyledSubHeading>Tools I use</StyledSubHeading>
            <StyledList>
              <StyledListItem>Git</StyledListItem>
              <StyledListItem>Storybook</StyledListItem>
              <StyledListItem>Eslint</StyledListItem>
              <StyledListItem>NPM</StyledListItem>
              <StyledListItem>Webpack</StyledListItem>
              <StyledListItem>VS Code</StyledListItem>
              <StyledListItem>Figma</StyledListItem>
              <StyledListItem>Atomic design</StyledListItem>
            </StyledList>
          </StyledSection>
          <StyledSection>
            <StyledSubHeading>Things I love</StyledSubHeading>
            <StyledParagraph sectionParagraph>
              My dog. Movies. Music. Board and video games. These are my time
              consumers. Probably in the near future will be living in cinema.
            </StyledParagraph>
          </StyledSection>
        </StyledRightWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Home;
