import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../../src/components/video/Video';
import context from '../../__mocks__/GlobalProvider';


it.skip('renders an home component into the VideoPlayer as snapshot', () => {
  jest.mock('../../src/context/WithContext', () => 'withContext');

  const TextInputComponent = renderer.create(<VideoPlayer context={{ context }} />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
