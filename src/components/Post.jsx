import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { PostListContext } from "../store/PostListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
          onClick={() => deletePost(post.id)}
        >
          <FaTimes />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary me-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-info mb-0 mt-2" role="alert">
          Peoples reaction of this post{" "}
          <span className="badge bg-info fw-bold">{post.reactions}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
