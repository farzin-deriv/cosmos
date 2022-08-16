import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

test('render a label', (): void => {
  const wrapper = shallow(<Button title="submit" onClick={() => console.log('submitted')} />);

  expect(wrapper).toMatchSnapshot();
});
