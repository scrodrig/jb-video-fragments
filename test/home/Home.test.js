import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/components/home/Home';

it('renders an home component into the Home as snapshot', () => {
  const TextInputComponent = renderer.create(<Home />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});