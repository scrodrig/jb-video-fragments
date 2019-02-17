import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../../src/components/video/VideoPlayer';

jest.mock('../../src/components/video/Video', () => 'Video');

it('renders an home component into the Content as snapshot', () => {
  const TextInputComponent = renderer.create(<VideoPlayer />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
