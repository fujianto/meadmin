import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NestedFragment } from 'app/containers/nested_fragment_page';
import NavTab from 'app/components/nav_tab';
import TabContent from 'app/components/tab_content';

Enzyme.configure({ adapter: new Adapter() });

describe('NestedFragment', () => {
  it("#render NestedFragment default view", () => {
    const rendered = shallow(<NestedFragment name="" />);

    expect(rendered.find('.nested-wrap').exists()).toEqual(true);
    expect(rendered.find('h2.page-title').text()).toEqual("Content from Service B");
    expect(rendered.find('.tab-content').exists()).toEqual(true);

    expect(rendered.find(NavTab).exists()).toBe(true);
    expect(rendered.find(TabContent).exists()).toBe(true);
    expect(rendered.find(TabContent).children().find('p').at(0).text()).toEqual("Hi");
    expect(rendered.find(TabContent).children().find('.name-title').text().trim()).toEqual("");

    expect(rendered.find(TabContent).children().find('p').at(1).text()).toEqual("this is service B-1 calling your name")
  });

  it("#render NestedFragment with focus on second tab content", () => {
    const rendered = shallow(<NestedFragment />);
    rendered.setState({ currentTab: 1 });

    expect(rendered.find(TabContent).children().find('p').at(0).text()).toEqual("Hi");
    expect(rendered.find(TabContent).children().find('.name-title').text().trim()).toEqual("");
    expect(rendered.find(TabContent).children().find('p').at(1).text()).toEqual("this is service B-2 calling your name")
  });

  it("#handleTabClick should update tab position", () => {
    const rendered = shallow(<NestedFragment />);
    rendered.instance().handleTabClick(1);

    expect(rendered.state().currentTab).toEqual(1);
  })
});