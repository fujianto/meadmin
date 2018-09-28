import React from 'react';
import { ListPage } from 'app/containers/list_page';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

fdescribe('ListPage component', () => {
  it('Render Provider and Router', () => {
    const rendered = shallow(<ListPage fetchPosts={ jest.fn() } />);
    const spyHandleNameChange = jest.spyOn(rendered.instance(), 'fetchPosts');

    expect(rendered.find('.wrap').exists()).toEqual(true);
  });
})
