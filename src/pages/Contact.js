import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Layout from 'src/components/Layout';
import OfficalInfo from 'src/components/molecules/OfficalInfo/OfficalInfo';
import NotOfficalInfo from 'src/components/molecules/NotOfficalInfo/NotOfficalInfo';
import { IconContext } from 'react-icons';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 130px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ info }) =>
    info &&
    css`
      width: 600px;
    `}
`;

const StyledButton = styled.button`
  text-align: left;
  background: none;
  outline: none;
  border: none;
  color: white;
  font-size: 40px;
  margin: 0 0 10px;
`;

class Contact extends Component {
  state = {
    isOfficalClicked: true,
  };

  toggleVisibility = e => {
    const data = e.target.getAttribute('data-type');

    if (data === 'offical') {
      this.setState({
        isOfficalClicked: true,
      });
    } else {
      this.setState({
        isOfficalClicked: false,
      });
    }
  };

  render() {
    return (
      <Layout>
        <IconContext.Provider value={{ size: '2em' }}>
          <StyledWrapper>
            <StyledInnerWrapper>
              <StyledButton
                type="button"
                data-type="offical"
                onClick={this.toggleVisibility}
              >
                OFFICAL
              </StyledButton>
              <StyledButton
                type="button"
                data-type="not-offical"
                onClick={this.toggleVisibility}
              >
                NOT SO OFFICAL
              </StyledButton>
            </StyledInnerWrapper>
            <StyledInnerWrapper info>
              {this.state.isOfficalClicked ? (
                <OfficalInfo />
              ) : (
                <NotOfficalInfo />
              )}
            </StyledInnerWrapper>
          </StyledWrapper>
        </IconContext.Provider>
      </Layout>
    );
  }
}

export default Contact;
