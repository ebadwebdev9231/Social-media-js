import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const handleAllPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };
  return (
    <div className="row p-4">
      {postList.length === 0 && <WelcomeMessage getAllPosts={handleAllPosts} />}
      {postList.map((post) => (
        <div key={post.id} className="col-xl-4 col-lg-6 col-md-12">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
