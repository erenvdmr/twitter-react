import React from "react";
import ProfilePhoto from "../../assets/photos/profile.jpeg";
import More from "../../assets/icons/More-2.svg";

export default function SideBottom() {
  return (
    <div className="sidebar-bottom">
      <div className="left">
        <img src={ProfilePhoto} alt="profile" className="profile" />
        <div className="text">
          <h3>Eren Demir</h3>
          <p>@erenvmdr</p>
        </div>
      </div>
      <div className="right">
        <img src={More} alt="" />
      </div>
    </div>
  );
}
