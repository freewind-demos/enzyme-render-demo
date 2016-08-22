import React from 'react';
import {render} from 'enzyme';

import Foo from '../foo.jsx';

describe('<Foo />', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo-bar').length).toEqual(3);
  });

  it('renders the title', () => {
    const wrapper = render(<Foo title="unique"/>);
    expect(wrapper.text().includes('unique')).toBeTruthy();
  });
});