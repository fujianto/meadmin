import React from 'react';
import NavTab from 'app/components/nav_tab';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NavTab component', () => {
  it('#render default NavTab component', () => {
    const rendered = shallow(<NavTab />);
    
    expect(rendered.find('.tab-section').exists()).toEqual(true);
  });

  it('#render NavTab component with tab items', () => {
    const rendered = shallow(<NavTab items={ ["Tab 1", "Tab 2"] } onTabClick={ () => {}} />);

    expect(rendered.find('.tab-section').exists()).toEqual(true);
    expect(rendered.find('.tab-section ul').exists()).toBe(true);
    expect(rendered.find('.tab-section ul li').length).toEqual(2);
    expect(rendered.find('.tab-section ul li span').at(0).text()).toEqual("Tab 1");
    expect(rendered.find('.tab-section ul li span').at(1).text()).toEqual("Tab 2");
  });
});

describe('NavTab click event', () => {
  it('#handleTabClick should set active first tab when first item clicked', () => {
    const rendered = shallow(<NavTab items={["Tab 1", "Tab 2"]} onTabClick={() => { }} />);
    rendered.find('.tab-section ul li').at(0).simulate('click');

    expect(rendered.state().currentTab).toEqual(0);
    expect(rendered.find('.tab-section ul li').at(0).hasClass('active')).toBe(true);
  })

  it('#handleTabClick should set active second tab when second item clicked', () => {
    const rendered = shallow(<NavTab items={["Tab 1", "Tab 2"]} onTabClick={() => { }} />);
    rendered.find('.tab-section ul li').at(1).simulate('click');

    expect(rendered.state().currentTab).toEqual(1);
    expect(rendered.find('.tab-section ul li').at(1).hasClass('active')).toBe(true);
  })
})
