import React from 'react';
import PropTypes from 'prop-types';

function PostForm({ formSubmit, title, body }) {
  return (
    <form onSubmit={formSubmit}>
      <input type='text' name='title' value={title} />
      <textarea name='body' value={body} />
      <button>Create Post</button>
    </form>
  );
}

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  formSubmit: PropTypes.func.isRequired
};

export default PostForm;
