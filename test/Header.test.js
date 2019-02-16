import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/header/Header';

it('renders an home component into the Header as snapshot', () => {
  const TextInputComponent = renderer.create(<Header />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
