export const SET_NAME = "SET_NAME";
export const FETCH_POSTS = "FETCH_POSTS";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: {
      name: name
    }
  }
}

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: {
      posts: posts
    }
  }
}