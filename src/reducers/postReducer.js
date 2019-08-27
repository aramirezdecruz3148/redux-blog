import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  postsArray: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, postsArray: [...state.postsArray, action.payload] };
    case DELETE_POST:
      return { ...state, postsArray: [
        ...state.postsArray.slice(0, action.payload.postIndex),
        ...state.postsArray.slice(action.payload.postIndex + 1)
      ] };
    default:
      return state;
  }
}

