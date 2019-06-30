import React from 'react';
import { storiesOf } from '@storybook/react';
import MainNavigation from './MainNavigation';

storiesOf('Molecules/Navigation', module)
  .add('Main', () => <MainNavigation />)
  .add('About', () => <MainNavigation isAbout />);
