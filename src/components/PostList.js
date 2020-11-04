import React from 'react';
import { PostDetail } from './PostDetail';
import { useSelector } from 'react-redux';

export const PostList = ({ setPost }) => {
  const { posts } = useSelector((state) => state);
  return (
    <div className='container'>
      <div className='row'>
        {posts &&
          posts.map((post) => (
            <PostDetail setPost={setPost} post={post} key={post.id} />
          ))}
      </div>
    </div>
  );
};
