import React from 'react';
import BreakingBadCharacters from '../components/characters/BreakingBadCharacters';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Store } from '../store';

test('Render BreakingBadCharacters Component', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BreakingBadCharacters />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
