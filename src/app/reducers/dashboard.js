import { SET_NAME, FETCH_POSTS } from 'app/actions/dashboard';

const initialState = {
  name: "",
  posts: [],
}

export default function Dashboard(state, action) {
  state = initialState

  switch (action.type) {
    case SET_NAME:
      const newName = action.payload.name;
      return { ...state, name: newName };

    case FETCH_POSTS:
      const latestPosts = state.posts.concat(action.payload.posts);
      return { ...state, posts: latestPosts };

    default:
      return state;
  }
}