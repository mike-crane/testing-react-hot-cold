import React from 'react';
import { shallow, mount } from 'enzyme';

import Feedback from '../feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders the feedback', () => {
    const test_feedback = 'Foo';
    const wrapper = shallow(<Feedback feedback={test_feedback} />);
    expect(wrapper.contains(test_feedback)).toEqual(true);
  });
});