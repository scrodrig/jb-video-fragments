import React from 'react';
import renderer from 'react-test-renderer';
import DrawerMenu from '../../src/components/drawer/DrawerMenu';

it('renders an home component into the DrawerMenu as snapshot', () => {
  const TextInputComponent = renderer.create(<DrawerMenu />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
