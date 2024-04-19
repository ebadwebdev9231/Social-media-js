import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  const handlePost = (e) => {
    e.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const reactions = reactionsRef.current.value;
    const tags = tagsRef.current.value.split(" ");

    userIdRef.current.value = "";
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";

    addPost(userId, title, description, reactions, tags);
  };

  return (
    <form className="w-50 mx-auto my-4" onSubmit={handlePost}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdRef}
          className="form-control"
          id="userId"
          placeholder="Please add User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleRef}
          className="form-control"
          id="postTitle"
          placeholder="How are you feeling Today.....?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postDescription" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          ref={descriptionRef}
          className="form-control"
          id="postDescription"
          rows="4"
          placeholder="What are you doing today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          type="number"
          ref={reactionsRef}
          className="form-control"
          id="reactions"
          placeholder="Add Post reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsRef}
          className="form-control"
          id="tags"
          placeholder="Add tags related by post."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
