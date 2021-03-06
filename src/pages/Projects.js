import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import Subheading from 'src/components/atoms/Subheading/Subheading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import ButtonLink from 'src/components/atoms/ButtonLink/ButtonLink';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
  font-family: 'Rohza One', 'sans-serif';
  font-size: 80px;
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
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
  color: white;
`;

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Boardime',
        photo:
          'https://images.pexels.com/photos/2170234/pexels-photo-2170234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description:
          'App to search through collection of own board games. Based on time and amount of players helps to pick right game/games to play.',
        technology: ['React', 'Styled components', 'Axios'],
        github: 'https://github.com/nicolaskimm/BGGAppReact',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'FavNote',
        photo:
          'https://images.pexels.com/photos/2170231/pexels-photo-2170231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description:
          'FavNote is a simple store for favourite notes, twitters and articles. Build on Eduweb course created by Adam Romański',
        technology: [
          'React',
          'Redux',
          'React Router',
          'Formik',
          'Styled components',
          'Storybook',
        ],
        github: 'https://github.com/nicolaskimm/favNote-eduweb-course-',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Iventi',
        photo:
          'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description:
          'Event platform to gather cultural events around the world.',
        technology: ['React', 'Redux', 'React Router', 'Formik'],
        github: 'https://github.com/nicolaskimm/event_app_redux',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Portfolio',
        photo:
          'https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Personel website.',
        technology: ['Gatsby', 'Styled components', 'Storybook'],
        github: 'https://github.com/nicolaskimm/portfolio_gatsby',
        demo: 'https://www.awwwards.com/',
      },
    ],
    currIndex: 0,
  };

  toggleLeft = () => {
    const projects = this.state.projects.length;
    const current = this.state.currIndex;

    const checkForIndex = current - 1 >= 0;

    const moveSlide = checkForIndex ? current - 1 : projects - 1;

    this.setState({
      currIndex: moveSlide,
    });
  };

  toggleRight = () => {
    const projects = this.state.projects.length;
    const current = this.state.currIndex;

    const checkForIndex = current + 1 >= projects;

    const moveSlide = checkForIndex ? 0 : current + 1;
    this.setState({
      currIndex: moveSlide,
    });
  };

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
            <IconContext.Provider value={{ size: '2.5em' }}>
              <FaArrowLeft onClick={this.toggleLeft} />
              <FaArrowRight onClick={this.toggleRight} />
            </IconContext.Provider>
          </StyledInnerWrapper>
        </StyledWrapper>
      </Layout>
    );
  }
}

export default Projects;
