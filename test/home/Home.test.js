import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/components/home/Home';

jest.mock('../../src/components/video/Video', () => 'Video');
jest.mock('../../src/components/clips/ClipList', () => 'ClipList');

it('renders an home component into the Home as snapshot', () => {
  const TextInputComponent = renderer.create(<Home />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
