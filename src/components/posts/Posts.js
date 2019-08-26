import React from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';

function Posts({ postsArray }) {
  const postList = postsArray.map(({ title }) => (
    <li key={title}>
      <Post title={title} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  postsArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Posts;
