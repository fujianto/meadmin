import { SET_NAME, FETCH_POSTS } from 'app/actions/dashboard';

const initialState = {
  name: "Septian",
  posts: [],
}

export default function Dashboard(state = initialState, action) {
  if (Object.keys(state).length === 0) {
    state = initialState;
  }

  switch (action.type) {
    case SET_NAME:
      const newName = action.payload.name;
      return { ...state, name: newName };

    case FETCH_POSTS:
      const latestPosts = action.payload.posts;
      return { ...state, posts: latestPosts };

    default:
      return state;
  }
}