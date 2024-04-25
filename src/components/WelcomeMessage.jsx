import React from "react";

const WelcomeMessage = ({ getAllPosts }) => {
  return (
    <div className="text-center mt-3">
      <h1>There is no post here...!</h1>
      <button className="btn btn-primary" onClick={getAllPosts}>
        Gell all posts
      </button>
    </div>
  );
};

export default WelcomeMessage;
