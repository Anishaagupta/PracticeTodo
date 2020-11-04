import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/actions/postAction';

export const PostDetail = ({ post, setPost }) => {
  const dispatch = useDispatch();
  return (
    <div className='col s12 m6'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>{post.title}</span>
          <p>{post.content}</p>
          {post.id}
        </div>
        <div className='card-action'>
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className='btn red'
          >
            Delete
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setPost(post);
              dispatch(deletePost(post.id));
            }}
            className='btn green'
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
