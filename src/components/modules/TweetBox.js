import React, { useState, useEffect } from "react";
import ProfilePhoto from "../../assets/photos/profile.jpeg";
import Galery from "../../assets/icons/Media.svg";
import GIF from "../../assets/icons/Gif.svg";
import Poll from "../../assets/icons/Poll.svg";
import Emoji from "../../assets/icons/Emoji.svg";
import Schedule from "../../assets/icons/Schedule.svg";

export default function TweetBox({ input, setInput, tweets, setTweets }) {
  const [dis, setDis] = useState(true);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setDis(false);
    } else {
      setDis(true);
    }

    setInput(e.target.value);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    setTweets([...tweets, { text: input }]);
    setInput("");
  };

  console.log(input);

  return (
    <div className="tweet-box">
      <div className="left">
        <img src={ProfilePhoto} alt="" className="profile2" />
      </div>
      <div className="right">
        <div className="top">
          <textarea
            rows={3}
            placeholder="What's happening?"
            onChange={handleChange}
            value={input}
          ></textarea>
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
            <button disabled={dis} className="sm-tweet" onClick={sendTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
