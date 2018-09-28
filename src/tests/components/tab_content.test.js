import React from 'react';
import  TabContent from 'app/components/tab_content';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('TabContent container', () => {
  it('#render TabContent container with default view', () => {
    const rendered = shallow(
      <TabContent>
      </TabContent>
    );

    expect(rendered.find('.tab-item').exists()).toEqual(true)
    expect(rendered.children().length).toEqual(0)
  });

  it('#render TabContent container with children', () => {
    const rendered = shallow(
      <TabContent>
        <p>Hello World!</p>
      </TabContent>
    );

    expect(rendered.find('.tab-item').exists()).toEqual(true);
    expect(rendered.children().length).toEqual(1);
    expect(rendered.children().find('p').at(0).text()).toEqual("Hello World!");
  });
})