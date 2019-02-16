import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an home component into the App as snapshot', () => {
  const TextInputComponent = renderer.create(<App />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
