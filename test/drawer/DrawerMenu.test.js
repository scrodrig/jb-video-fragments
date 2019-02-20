import React from 'react';
import renderer from 'react-test-renderer';
import DrawerMenu from '../../src/components/drawer/DrawerMenu';

jest.mock('../../src/components/search/SearchInput', () => 'SearchInput');
it('renders an home component into the DrawerMenu as snapshot', () => {
  const TextInputComponent = renderer.create(<DrawerMenu />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
