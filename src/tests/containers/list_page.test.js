import React from 'react';
import { ListPage } from 'app/containers/list_page';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import ReactPaginate from 'react-paginate';

Enzyme.configure({ adapter: new Adapter() });

fdescribe('ListPage component', () => {
  it('#Render ListPage and empty Table with pagination', () => {
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
})
