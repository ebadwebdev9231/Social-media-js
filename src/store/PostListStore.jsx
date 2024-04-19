import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

const initialState = [
  {
    id: "0",
    title: "Hello Friends, I'm your developer Ebad",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ab autem omnis ipsam tenetur,",
    reactions: "20",
    tags: ["friends", "Developer", "Viral"],
  },
  {
    id: "1",
    title:
      "Hello there, Don't waste your time. Learn more today and earn more tomorrow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere praesentium voluptatum itaque quisquam repellendus sint nobis! Vero officia eos aliquid!",
    reactions: "56",
    tags: ["time", "earn", "start today"],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);
  }
  return state;
};

export const PostListContext = createContext(defaultContext);

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, initialState);
  const addPost = () => {};
  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
