import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListStore";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div className="row p-4">
      {postList.map((post) => (
        <div key={post.id} className="col-lg-4 col-md-6">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
