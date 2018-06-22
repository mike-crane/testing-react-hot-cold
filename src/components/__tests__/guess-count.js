import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from '../guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders the count', () => {
    const test_count = 2;
    const wrapper = shallow(<GuessCount guessCount={test_count} />);
    expect(wrapper.contains(test_count)).toEqual(true);
  });
});