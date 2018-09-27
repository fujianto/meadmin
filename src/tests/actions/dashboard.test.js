import * as Dashboard from 'app/actions/dashboard';

describe('Dashboard', () => {
  it('should create action to set name', () => {
    const expectedAction = {
      type: Dashboard.SET_NAME,
      payload: {
        name: "stub-name"
      }
    }
    
    expect(Dashboard.setName("stub-name")).toEqual(expectedAction);
  });

  it('should create action to fetch posts', () => {
    const expectedAction = {
      type: Dashboard.FETCH_POSTS,
      payload: {
        posts: [
          {}
        ]
      }
    }

    expect(Dashboard.fetchPosts([{}])).toEqual(expectedAction);
  });
})