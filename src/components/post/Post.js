import React from 'react';
import PropTypes from 'prop-types';

function Post({ title }) {
  return (
    <>
      <h3>{title}</h3>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;
