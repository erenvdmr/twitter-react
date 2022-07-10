import React from "react";

export default function FollowContent({ avatar, name, username }) {
  return (
    <div className="box">
      <div className="left">
        <img src={avatar} alt="" />

        <div className="mid">
          <h4>{name}</h4>
          <p>@{username}</p>
        </div>
      </div>

      <div className="right">
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
}
