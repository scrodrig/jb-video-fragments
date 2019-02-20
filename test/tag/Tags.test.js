import React from 'react';
import renderer from 'react-test-renderer';
import Tags from '../../src/components/tag/Tags';

it('renders an component into the Tags as snapshot', () => {
  const tagsComponent = renderer.create(<Tags />).toJSON();
  expect(tagsComponent).toMatchSnapshot();
});
