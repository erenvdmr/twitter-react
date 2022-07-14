import React from "react";
import DeleteIcon from "../../assets/icons/Delete.svg";

export default function TweetMore() {
  return (
    <div className="tweet-more">
      <img src={DeleteIcon} alt="" />
      <p>Delete this Tweet</p>
    </div>
  );
}
