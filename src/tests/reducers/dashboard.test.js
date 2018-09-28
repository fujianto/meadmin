import * as Action from 'app/actions/dashboard';
import Reducer from 'app/reducers/dashboard';

describe("Dashboard reducer", () => {
  it('should return the initial state', () => {
    expect(Reducer(undefined, {})).toEqual({
      name: "Septian",
      posts: []
    });
  });

  it('should set name to new value based on action input', () => {
    const expectedValue = {
      name: "stub-name",
      posts: []
    };

    expect(Reducer({}, Action.setName("stub-name"))).toEqual(expectedValue);
  });

  it('should set posts to new value based on action input', () => {
    const expectedValue = {
      name: "Septian",
      posts: [
        { id: 1, title: "stub-title-1"},
        { id: 1, title: "stub-title-1" }
      ]
    };

    expect(Reducer({}, Action.fetchPosts(expectedValue.posts))).toEqual(expectedValue);
  });
})