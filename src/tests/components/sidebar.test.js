import React from 'react';
import Sidebar from 'app/components/sidebar';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidebar component', () => {
  it('#render Sidebar component', () => {
    const rendered = shallow(<Sidebar />);

    expect(rendered.find('aside.sidebar').exists()).toEqual(true);
    expect(rendered.find('ul.sidebar-menu').exists()).toEqual(true);
    expect(rendered.find('ul.sidebar-menu li').length).toEqual(3);
    expect(rendered.find('ul.sidebar-menu li').find(Link).exists()).toEqual(true);

    expect(rendered.find('ul.sidebar-menu li').at(0).find(Link).props().to).toEqual('/');
    expect(rendered.find('ul.sidebar-menu li').at(0).find(Link).props().children).toEqual('Home');

    expect(rendered.find('ul.sidebar-menu li').at(1).find(Link).props().to).toEqual('/nested-fragment');
    expect(rendered.find('ul.sidebar-menu li').at(1).find(Link).props().children).toEqual('Nested Fragment');

    expect(rendered.find('ul.sidebar-menu li').at(2).find(Link).props().to).toEqual('/list');
    expect(rendered.find('ul.sidebar-menu li').at(2).find(Link).props().children).toEqual('List');
  });
})
