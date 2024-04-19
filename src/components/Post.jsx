import { FaTimes } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          <FaTimes />
        </span>
        <p className="card-text">{post.description}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary me-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-info mb-0 mt-2" role="alert">
          Reaction of this post{" "}
          <span class="badge bg-info fw-bold">{post.reactions}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
