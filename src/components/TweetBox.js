import React from "react";
import ProfilePhoto from "../assets/photos/profile.jpeg";
import Galery from "../assets/icons/Media.svg";
import GIF from "../assets/icons/Gif.svg";
import Poll from "../assets/icons/Poll.svg";
import Emoji from "../assets/icons/Emoji.svg";
import Schedule from "../assets/icons/Schedule.svg";

export default function TweetBox() {
  return (
    <div className="tweet-box">
      <div className="left">
        <img src={ProfilePhoto} alt="" className="profile2" />
      </div>
      <div className="right">
        <div className="top">
          <textarea rows={3} placeholder="What's happening?"></textarea>
        </div>
        <div className="bottom">
          <div className="left2">
            <img src={Galery} alt="" id="fi" />
            <img src={GIF} alt="" />
            <img src={Poll} alt="" />
            <img src={Emoji} alt="" />
            <img src={Schedule} alt="" />
          </div>
          <div className="right2">
            <button className="sm-tweet">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}