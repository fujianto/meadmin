import React from 'react';
import { HomePage } from 'app/containers/home_page';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('HomePage container', () => {
  it('#render HomePage container', () => {
    const rendered = shallow(
      <HomePage 
        name=""
      />
    );

    expect(rendered.find('.wrapper').exists()).toEqual(true);
    expect(rendered.find('h2.page-title').exists()).toEqual(true);
    expect(rendered.find('h3.name-title').text()).toEqual("");
    expect(rendered.find('p').text()).toEqual("This is your Homepage served by Service A.");

    expect(rendered.find('.form-group').exists()).toEqual(true);
    expect(rendered.find('label.name-label').text()).toEqual("Name");
    expect(rendered.find('input#name-input').value).toEqual(undefined);
  });

  it('#render correct input name', () => {
    const rendered = shallow(
      <HomePage
        name="stub-name"
      />
    );

    expect(rendered.find('h3.name-title').text()).toEqual("stub-name");
  })
})

describe('When input name change', () => {
  let rendered;
  const mockHandleNameChangeFn = jest.fn();

  beforeEach(() => {
    rendered = shallow(
      <HomePage setName={ mockHandleNameChangeFn } name="" />
    );
  });

  it('should call mock #handleInputNameChange', () => {
    const spyHandleNameChange = jest.spyOn(rendered.instance(), 'handleNameChange');
    const e = { target: { value: 'stub-name' } };
    rendered.find('input#name-input').simulate('change', e);

    expect(spyHandleNameChange).toHaveBeenCalled();
    expect(mockHandleNameChangeFn.mock.calls.length).toBe(1);
  });
});
