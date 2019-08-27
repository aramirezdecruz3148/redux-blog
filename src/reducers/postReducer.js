import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  postsArray: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: [
        ...state.posts.slice(0, action.payload.postIndex),
        ...state.posts.slice(action.payload.postIndex + 1)
      ] };
    default:
      return state;
  }
}

