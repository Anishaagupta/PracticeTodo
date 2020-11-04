import React, { useState } from 'react';
import { AddPost } from './AddPost';
import { PostList } from './PostList';

export const HomePage = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });
  return (
    <>
      <AddPost post={post} setPost={setPost} />
      <PostList setPost={setPost} />
    </>
  );
};
