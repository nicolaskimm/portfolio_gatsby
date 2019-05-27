import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Big', () => (
    <Heading big bold>
      Joanna Krężołek
    </Heading>
  ))
  .add('Subheading', () => <Heading>Hi, my name is</Heading>);
