import { CREATE_COMMENT, DELETE_COMMENTS } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: { ...state.comments, [action.payload.postIndex]: [action.payload.comment] } };
    case DELETE_COMMENTS:
      return { ...state, comments: { ...state.comments, [action.payload.postIndex]: [ 
        ...state.comments[action.payload.postIndex].slice(0, action.payload.postIndex),
        ...state.comments[action.payload.postIndex].slice(action.payload.postIndex + 1)
      ] } };
    default:
      return state;
  }
}
