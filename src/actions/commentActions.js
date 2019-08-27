export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment, postIndex) => ({
  type: CREATE_COMMENT,
  payload: comment, postIndex
});

export const DELETE_COMMENTS = 'DELETE_COMMENTS';
export const deleteComment = (comment, postIndex) => ({
  type: DELETE_COMMENTS,
  payload: comment, postIndex
});
