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
            retweet="0"
            reply="0"
            like="0"
          />
        ))}

      <Post
        text={"hello world"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="0"
        reply="0"
        like="0"
      />

      <Post
        text={"deisgn, code"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="1"
        reply="1"
        like="8"
      />

      <Post
        text={"deisgn, code"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="1"
        reply="1"
        like="8"
      />

      <Post
        text={"deisgn, code"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="1"
        reply="1"
        like="8"
      />

      <Post
        text={"I send project to my github profile"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="0"
        reply="0"
        like="2"
      />

      <Post
        text={"hello world"}
        name={"Eren Demir"}
        username={"erenvdmr"}
        image=""
        avatar={ProfilePhoto}
        retweet="0"
        reply="2"
        like="10"
      />
    </div>
  );
}
