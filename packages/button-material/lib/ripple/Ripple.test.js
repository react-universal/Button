import React from 'react';
import {Ripple} from '../../';

import renderer from 'react-test-renderer';

it('Ripple Renders', () => {
  const tree = renderer.create(<Ripple />).toJSON();
  expect(tree).toMatchSnapshot();
});
