import React from 'react';
import MasterPage from 'app/containers/master_page';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from 'app/components/header'
import Sidebar from 'app/components/sidebar' 

Enzyme.configure({ adapter: new Adapter() });

describe('MasterPage container', () => {
  it('#render MasterPage container with default view', () => {
    const rendered = shallow(
      <MasterPage>
      </MasterPage>
    );

    expect(rendered.find('.main-wrap').exists()).toEqual(true);
    expect(rendered.find(Header).exists()).toEqual(true);
    expect(rendered.find('.container-fluid').exists()).toEqual(true);
    expect(rendered.find('.row').exists()).toEqual(true);
    expect(rendered.find('.col-md-3.col-xs-12.left-sidebar').exists()).toEqual(true);
    expect(rendered.find(Sidebar).exists()).toEqual(true);
    expect(rendered.find('.col-md-9.col-xs-12.main-content').exists()).toEqual(true);

    expect(rendered.find('.col-md-9.col-xs-12.main-content').children().length).toEqual(0)
  });

  it('#render MasterPage container with children', () => {
    const rendered = shallow(
      <MasterPage>
        <p>Hello World!</p>
      </MasterPage>
    );

    expect(rendered.find('.col-md-9.col-xs-12.main-content').children().length).toEqual(1);
    expect(rendered.find('.col-md-9.col-xs-12.main-content').children().find('p').at(0).text()).toEqual("Hello World!");
  });
});