import React from 'react';
import Header from 'app/components/header';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('#render header component', () => {
    const setBaseValue = jest.fn();

    const rendered = shallow(<Header />);
    expect(rendered.find('header.header').exists()).toEqual(true);
    expect(rendered.find('h1.site-title').exists()).toEqual(true);
    expect(rendered.find('h1.site-title').text()).toEqual("Dashboard App");
  });
})
