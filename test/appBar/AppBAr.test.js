import React from 'react';
import renderer from 'react-test-renderer';
import AppBar from '../../src/components/appBar/AppBar';

it('renders an home component into the AppBar as snapshot', () => {
  const TextInputComponent = renderer.create(<AppBar />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
