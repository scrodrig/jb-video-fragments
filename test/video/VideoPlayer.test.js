import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../../src/components/videoPlayer/VideoPlayer';

it('renders an home component into the VideoPlayer as snapshot', () => {
  const TextInputComponent = renderer.create(<VideoPlayer />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
