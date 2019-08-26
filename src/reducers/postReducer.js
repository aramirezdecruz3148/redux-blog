import { CREATE_POST, DELETE_POST } from '../actions/postActions';


const initialState = {
  postsArray: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p !== action.payload) };
    default:
      return state;
  }
}

