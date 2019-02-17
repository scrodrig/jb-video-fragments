import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../src/components/content/Content';

it('renders an home component into the Content as snapshot', () => {
  const TextInputComponent = renderer.create(<Content />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
