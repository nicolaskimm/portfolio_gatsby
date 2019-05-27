import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLink from './NavLink';

storiesOf('Atoms/Navlink', module)
  .add('home', () => <NavLink>home</NavLink>)
  .add('about', () => <NavLink>about</NavLink>)
  .add('secondary', () => <NavLink secondary>contact</NavLink>);
