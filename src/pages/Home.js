import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import Heading from 'src/components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  height: 90vh;
  margin: 90px 0 0 200px;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 60px;
  letter-spacing: 3px;
`;

const Home = () => {
  return (
    <Layout>
      <StyledWrapper>
        <Heading>hi, my name is</Heading>
        <StyledHeading bold big>
          Joanna Krężołek
        </StyledHeading>
        <Heading>I am looking for a job as</Heading>
        <Heading greenline>junior front end developer</Heading>
      </StyledWrapper>
    </Layout>
  );
};

export default Home;
