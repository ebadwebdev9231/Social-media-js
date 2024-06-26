import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);

    case "ADD_INITIAL_POSTS":
      return action.payload.posts;

    case "ADD_POST":
      return [action.payload, ...state];

    default:
      return state;
  }
};

export const PostListContext = createContext(defaultContext);

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, []);
  const addPost = (userId, title, body, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        reactions,
        tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatch({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
