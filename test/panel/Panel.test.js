import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '../../src/components/panel/Panel';

it('renders an home component into the Panel as snapshot', () => {
  const TextInputComponent = renderer.create(<Panel />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
