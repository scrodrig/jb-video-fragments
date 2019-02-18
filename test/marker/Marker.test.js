import React from 'react';
import renderer from 'react-test-renderer';
import Marker from '../../src/components/marker/Marker';

jest.mock('../../src/components/video/Video', () => 'Video');
jest.mock('../../src/components/clips/ClipList', () => 'ClipList');

it('renders an marker component into the App as snapshot', () => {
  const TextInputComponent = renderer.create(<Marker />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
