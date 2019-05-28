import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import Subheading from 'src/components/atoms/Subheading/Subheading';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
`;

const StyledElement = styled.h1`
  justify-self: center;
`;

const Projects = () => {
  return (
    <Layout>
      <StyledWrapper>
        <Subheading primary> Boardime </Subheading>
        <StyledElement> Projects </StyledElement>
      </StyledWrapper>
    </Layout>
  );
};

export default Projects;
