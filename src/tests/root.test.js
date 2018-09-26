import React from 'react';
import Root from 'app/root';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import MasterPage from 'app/containers/master_page'
import HomePage from 'app/containers/home_page'

Enzyme.configure({ adapter: new Adapter() });

describe('Root component', () => {
  it('Render Provider and Router', () => {
    const setBaseValue = jest.fn();

    const rendered = shallow(<Root />);

    expect(rendered.find(Provider).exists()).toEqual(true);
    expect(rendered.find(Router).exists()).toEqual(true);
    expect(rendered.find(Route).length).toEqual(2);
  });
})
