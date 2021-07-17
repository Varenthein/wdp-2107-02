import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Component Carousel', () => {
  it('should render without crashing', () => {
    const component = shallow(<Carousel images={[]} />);
    expect(component).toBeTruthy();
  });
});
