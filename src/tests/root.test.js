import React from 'react';
import Root from 'app/root';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

Enzyme.configure({ adapter: new Adapter() });

describe('Root component', () => {
  it('Render Provider and Router', () => {
    const rendered = shallow(<Root />);
    const componentStore = rendered.find(Provider).props().store ;
    
    expect(componentStore !== null && typeof componentStore !== 'undefined').toEqual(true)
    expect(rendered.find(Provider).exists()).toEqual(true);
    expect(rendered.find(Router).exists()).toEqual(true);
    expect(rendered.find(Route).length).toEqual(3);
    expect(rendered.find(Route).at(0).props().path).toEqual("/");
    expect(rendered.find(Route).at(0).props().exact).toEqual(true);
    expect(rendered.find(Route).at(1).props().path).toEqual("/nested-fragment");
    expect(rendered.find(Route).at(1).props().exact).toEqual(true);
    expect(rendered.find(Route).at(2).props().path).toEqual("/list");
    expect(rendered.find(Route).at(2).props().exact).toEqual(true);
  });
})
