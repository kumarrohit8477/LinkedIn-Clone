import React from "react";
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={photoUrl} alt="user" />
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>🔁 Repost</button>
        <button>📤 Send</button>
      </div>
    </div>
  );
};

export default Post;
