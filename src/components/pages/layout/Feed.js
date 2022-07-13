import React, { useState } from "react";

import Header from "../../modules/Header";
import TweetBox from "../../modules/TweetBox";
import Post from "../../modules/Post";

import PostPhoto from "../../../assets/photos/post.jpeg";
import Avatar from "../../../assets/photos/figma.png";

import ProfilePhoto from "../../../assets/photos/profile.jpeg";

export default function Feed() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div className="feed">
      {/* Header */}
      <Header />

      {/* Tweet Box */}
      <TweetBox
        input={input}
        setInput={setInput}
        tweets={tweets}
        setTweets={setTweets}
      />

      {/* Post */}

      {tweets
        .slice(0)
        .reverse()
        .map((n) => (
          <Post
            text={n.text}
            name={"Eren Demir"}
            username={"erenvdmr"}
            image=""
            avatar={ProfilePhoto}
          />
        ))}

      <Post
        name={"Eren Demir"}
        username={"erenvdmr"}
        text={"code, design"}
        avatar={ProfilePhoto}
        reply="2"
        like="17"
        retweet="1"
      />

      <Post
        name={"Figma"}
        username={"figma"}
        text={"Design is our life 🎨"}
        image={PostPhoto}
        avatar={Avatar}
        reply="2"
        like="17"
        retweet="1"
      />
    </div>
  );
}
