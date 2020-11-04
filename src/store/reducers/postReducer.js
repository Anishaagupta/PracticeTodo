const initState = {
  posts: [
    { id: 1, title: 'post one', content: 'this is post one' },
    { id: 2, title: 'post two', content: 'this is post two' },
  ],
  id: '',
  title: '',
  content: '',
};

const postReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_POST':
      return {
        posts: [...state.posts, payload],
      };
    case 'DELETE_POST':
      const newPost = state.posts.filter((post) => post.id !== payload);
      console.log(newPost);
      return {
        posts: newPost,
      };
    case 'EDIT_POST':
      const editPost = state.posts.map((data) => {
        if (data.id === payload.id) {
          data.content = data;
        }
        return data;
      });
      return {
        posts: editPost,
      };
    default:
      return state;
  }
};

export default postReducer;
