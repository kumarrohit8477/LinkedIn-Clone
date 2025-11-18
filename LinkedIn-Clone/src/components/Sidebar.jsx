import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60"
          alt="cover"
          className="cover-img"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar"
          className="profile-img"
        />
        <h3>Rohit Kumar</h3>
        <p>Software Developer | CSE Student</p>
      </div>

      <div className="sidebar-stats">
        <p>Who viewed your profile <span>112</span></p>
        <p>Views of your post <span>89</span></p>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        <div className="recent-item">#reactjs</div>
        <div className="recent-item">#programming</div>
        <div className="recent-item">#webdevelopment</div>
        <div className="recent-item">#software</div>
      </div>
    </div>
  );
};

export default Sidebar;
