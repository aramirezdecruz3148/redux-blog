import { CREATE_COMMENT, DELETE_COMMENTS } from '../actions/commentActions';

const initialState = {
  comments: {
    0: ['hi']
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT: //the below line is wrong, it needs to be fixed
      return { ...state, comments: { ...state.comments, [action.payload.postIndex]: [...action.payload.comment] } };
    case DELETE_COMMENTS:
      return { ...state, comments: { ...state.comments } };
    default:
      return state;
  }
}

//something to do with the replit
//action.payload.slice(0, [action.payload.postIndex])
//action.payload.slice(action.payload.comment.length - 1)