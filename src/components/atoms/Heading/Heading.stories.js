import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Big', () => (
    <Heading big bold>
      Joanna Krężołek
    </Heading>
  ))
  .add('Subheading', () => <Heading>Hi, my name is</Heading>)
  .add('AboutHeading', () => (
    <div>
      <Heading about>me</Heading>
      <Heading about>skills</Heading>
      <Heading about>hobbies</Heading>
      <Heading about>plans</Heading>
    </div>
  ));
