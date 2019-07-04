import React from 'react';
import { storiesOf } from '@storybook/react';
import Subheading from './SubHeading';

storiesOf('Atoms/Subheading', module)
  .add('Primary', () => <Subheading primary>Boardime</Subheading>)
  .add('Secondary', () => <Subheading>Boardime</Subheading>);
