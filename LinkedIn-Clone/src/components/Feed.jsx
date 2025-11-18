import React, { useState } from "react";
import "./Feed.css";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      name: "Rohit Kumar",
      description: "CSE Student | Software Developer",
      message: "Excited to start building new projects with React and TailwindCSS!",
      photoUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      name: "LinkedIn User",
      description: "Frontend Developer",
      message: "Just learned about useContext in React — super powerful hook!",
      photoUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
    }
  ]);

  return (
    <div className="feed">
      <div className="feed-input">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar"
        />
        <input type="text" placeholder="Start a post" />
      </div>

      <div className="feed-options">
        <button>📷 Photo</button>
        <button>🎥 Video</button>
        <button>📅 Event</button>
        <button>📰 Write article</button>
      </div>

      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Feed;
