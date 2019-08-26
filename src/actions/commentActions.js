export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = comment => ({
  type: CREATE_COMMENT,
  payload: comment
});

export const DELETE_COMMENTS = 'DELETE_COMMENTS';
export const deleteComment = comment => ({
  type: DELETE_COMMENTS,
  payload: comment
});
