import React from 'react';
import { ListPage } from 'app/containers/list_page';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import ReactPaginate from 'react-paginate';
import AsyncFetch from 'app/helpers/async_fetch';

Enzyme.configure({ adapter: new Adapter() });

fdescribe('ListPage component', () => {
  it('#render ListPage and empty Table with pagination', () => {
    const rendered = shallow(<ListPage fetchPosts={ jest.fn() } />);
    
    expect(rendered.find('.wrap').exists()).toEqual(true);
    expect(rendered.find('h2.page-title').text()).toEqual("List of items with pagination");
    expect(rendered.find('table.table.table-striped').exists()).toEqual(true);
    expect(rendered.find('table.table.table-striped thead').exists()).toEqual(true);
    expect(rendered.find('table.table.table-striped thead tr').exists()).toEqual(true);
    expect(rendered.find('table.table.table-striped thead tr th').at(0).text()).toEqual("ID");
    expect(rendered.find('table.table.table-striped thead tr th').at(1).text()).toEqual("User ID");
    expect(rendered.find('table.table.table-striped thead tr th').at(2).text()).toEqual("Title");

    expect(rendered.find('table.table.table-striped tbody').exists()).toEqual(true);
    expect(rendered.find('table.table.table-striped tbody tr').exists()).toEqual(false);
    expect(rendered.find('table.table.table-striped tbody tr td').exists()).toEqual(false);

    expect(rendered.find(ReactPaginate).exists()).toEqual(true);
  });

  it('#render ListPage with filled Table', () => {
    const items = [
      { id: 1, userId: 1, title: 'Hello' },
      { id: 2, userId: 1, title: 'World' }
    ]
    const rendered = shallow(<ListPage fetchPosts={jest.fn()} posts={ items } />);
    
    expect(rendered.find('table.table.table-striped tbody tr').length).toEqual(2);
    expect(rendered.find('table.table.table-striped tbody tr td').length).toEqual(6);
  })

  it("#handlePaginationClick change current page of table pagination", () => {
    const items = [
      { id: 1, userId: 1, title: 'Hello' },
      { id: 2, userId: 1, title: 'World' }
    ]

    const rendered = mount(<ListPage fetchPosts={jest.fn()} posts={items} />);
    rendered.instance().handlePaginationClick(2);
    const spyFetchPosts = jest.spyOn(rendered.instance(), 'fetchPosts');
    rendered.instance().fetchPosts(2);

    expect(spyFetchPosts).toHaveBeenCalled();
    expect(rendered.state().page).toEqual(2);

    afterEach(() => {
      spyFetchPosts.mockClear()
    })
  })

  it("#fetchPosts called on first load", () => {
    const items = [
      { id: 1, userId: 1, title: 'Hello' },
      { id: 2, userId: 1, title: 'World' }
    ]

    const rendered = mount(<ListPage fetchPosts={jest.fn()} posts={items} />);
    const spyFetchPosts = jest.spyOn(rendered.instance(), 'fetchPosts');

    rendered.instance().fetchPosts(1);
    expect(spyFetchPosts).toHaveBeenCalled();

    afterEach(() => {
      spyFetchPosts.mockClear()
    })
  })
})
