import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import Subheading from 'src/components/atoms/Subheading/Subheading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import ButtonLink from 'src/components/atoms/ButtonLink/ButtonLink';
import ListItem from 'src/components/atoms/ListItem/ListItem';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 150px;
`;

const StyledInnerWrapper = styled.div`
  width: 60vw;
  height: 70vh;
  background-image: url(${({ photoUrl }) => photoUrl});
  background-repeat: no-repeat;
  background-size: cover;

  ${({ info }) =>
    info &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 300px;
      height: 80vh;
      background-color: #141414;
      padding: 25px;
    `}
`;

const StyledSubheading = styled(Subheading)`
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 30px 0;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
`;

class Projects2 extends Component {
  state = {
    projects: [
      {
        title: 'Boardime',
        photo:
          'https://images.pexels.com/photos/2170234/pexels-photo-2170234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description:
          'App to search through collection of own board games. Based on time and amount of players helps to pick right game/games to play.',
        technology: ['React', 'Axios', 'Styled components'],
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
          'Storybook',
          'Formik',
          'React Router',
          'Styled components',
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
        technology: ['React', 'Redux', 'Formik', 'React Router'],
        github: 'https://github.com/nicolaskimm/event_app_redux',
        demo: 'https://www.awwwards.com/',
      },
      {
        title: 'Portfolio',
        photo:
          'https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Personal website.',
        technology: ['Gatsby', 'Storybook', 'Styled components'],
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
          <IconContext.Provider
            value={{ size: '50px', style: { padding: '10px' } }}
          >
            <FaArrowLeft onClick={this.toggleLeft} />
            <StyledInnerWrapper info>
              <div>
                <StyledSubheading>{title}</StyledSubheading>
                <StyledParagraph>{description}</StyledParagraph>
              </div>
              <div>
                <StyledSubheading>Technology</StyledSubheading>
                <StyledList>
                  {technology.map(item => (
                    <ListItem>{item}</ListItem>
                  ))}
                </StyledList>
              </div>
              <div>
                <StyledButtonLink href={github}>github</StyledButtonLink>
                <StyledButtonLink href={demo}>demo</StyledButtonLink>
              </div>
            </StyledInnerWrapper>
            <StyledInnerWrapper photo photoUrl={photo} />
            <FaArrowRight onClick={this.toggleRight} />
          </IconContext.Provider>
        </StyledWrapper>
      </Layout>
    );
  }
}

export default Projects2;
