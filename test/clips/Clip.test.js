import React from 'react';
import renderer from 'react-test-renderer';
import Clip from '../../src/components/clips/Clip';

jest.mock('../../src/components/video/Video', () => 'Video');

it('renders an clip component into the Clip as snapshot', () => {
  const clip = {
    name: 'cualquier cosa',
    thumbnail: 'cualquier_cosa.png',
    tags: [],
    start: 80,
    end: 90,
  };
  const TextInputComponent = renderer.create(<Clip clip={clip} />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
