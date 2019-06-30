import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import Subheading from 'src/components/atoms/Subheading/Subheading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import ButtonLink from 'src/components/atoms/ButtonLink/ButtonLink';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 60vh 20vh;
`;

const StyledInnerWrapper = styled.div`
  box-sizing: border-box;
  justify-self: center;
  margin-top: 30px;
  padding: 0 100px;

  ${({ right }) =>
    right &&
    css`
      grid-column-end: 4;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 70px;
      width: 100%;
      padding: 0;
      grid-column-end: 3;
    `}
`;

const StyledHeading = styled(Subheading)`
  font-size: 60px;
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  line-height: 25px;
  font-size: 18px;
`;

const StyledList = styled.ul`
  text-align: left;
  padding: 0;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ photoUrl }) => photoUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledButtonSection = styled.div`
  margin-top: 50px;
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
`;

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Boardime',
        photo:
          'https://images.pexels.com/photos/2170234/pexels-photo-2170234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description:
          'Vero clita labore consetetur voluptua sadipscing kasd gubergren. Stet stet consetetur et amet kasd lorem sit takimata ipsum. No voluptua.',
        technology: ['JS', 'React'],
        github: 'https://github.com/nicolaskimm',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Second',
        photo:
          'https://images.pexels.com/photos/2170231/pexels-photo-2170231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description:
          'Vero clita labore consetetur voluptua sadipscing kasd gubergren. Stet stet consetetur et amet kasd lorem sit takimata ipsum. No voluptua.',
        technology: ['tech', 'tech'],
        github: 'https://github.com/nicolaskimm',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Third',
        photo:
          'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description:
          'Vero clita labore consetetur voluptua sadipscing kasd gubergren. Stet stet consetetur et amet kasd lorem sit takimata ipsum. No voluptua.',
        technology: ['tech', 'tech'],
        github: 'https://github.com/nicolaskimm',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Fourth',
        photo:
          'https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description:
          'Vero clita labore consetetur voluptua sadipscing kasd gubergren. Stet stet consetetur et amet kasd lorem sit takimata ipsum. No voluptua.',
        technology: ['tech', 'tech'],
        github: 'https://github.com/nicolaskimm',
        demo: 'https://www.awwwards.com/',
      },
    ],
    currIndex: 0,
  };

  toggleLeft() {
    const projects = this.state.projects.length;
    const current = this.state.currIndex;

    const checkForIndex = current - 1 >= 0;

    const moveSlide = checkForIndex ? current - 1 : projects - 1;

    this.setState({
      currIndex: moveSlide,
    });
  }

  toggleRight() {
    const projects = this.state.projects.length;
    const current = this.state.currIndex;

    const checkForIndex = current + 1 >= projects;

    const moveSlide = checkForIndex ? 0 : current + 1;
    this.setState({
      currIndex: moveSlide,
    });
  }

  render() {
    const activeElement = this.state.projects[this.state.currIndex];
    const {
      title,
      photo,
      description,
      technology,
      github,
      demo,
    } = activeElement;

    return (
      <Layout>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledHeading>{title}</StyledHeading>
            <StyledParagraph>{description}</StyledParagraph>
          </StyledInnerWrapper>
          <StyledImage photoUrl={photo} />
          <StyledInnerWrapper right>
            <StyledHeading> Technology </StyledHeading>
            <StyledList>
              <StyledParagraph>{technology}</StyledParagraph>
            </StyledList>
            <StyledButtonSection>
              <StyledButtonLink href={github}>github</StyledButtonLink>
              <StyledButtonLink href={demo}>demo</StyledButtonLink>
            </StyledButtonSection>
          </StyledInnerWrapper>
          <StyledInnerWrapper bottom>
            <button type="button" onClick={this.toggleLeft.bind(this)}>
              left
            </button>
            <button type="button" onClick={this.toggleRight.bind(this)}>
              right
            </button>
          </StyledInnerWrapper>
        </StyledWrapper>
      </Layout>
    );
  }
}

export default Projects;
