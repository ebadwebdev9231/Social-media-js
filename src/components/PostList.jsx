import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListStore";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div className="row p-4">
      {postList.map((post) => (
        <div key={post.id} className="col-xl-4 col-lg-6 col-md-12">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
