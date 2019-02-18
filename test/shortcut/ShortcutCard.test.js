import React from 'react';
import renderer from 'react-test-renderer';
import ShortcutCard from '../../src/components/shortcuts/ShortcutCard';

it('renders an card component into the ShortcutCard as snapshot', () => {
  const TextInputComponent = renderer.create(<ShortcutCard />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
