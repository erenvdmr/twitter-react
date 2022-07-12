import React from "react";

import TweetBox from "./TweetBox";

import CloseIcon from "../../assets/icons/Close.svg";

export default function TweetModal({ open, close }) {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="tweet-modal">
        <img src={CloseIcon} alt="" onClick={close} className="close" />
        <TweetBox />
      </div>
    </div>
  );
}
