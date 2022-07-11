import React from "react";
import Header from "../../modules/Header";
import TweetBox from "../../modules/TweetBox";
import Post from "../../modules/Post";

export default function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <Header />

      {/* Tweet Box */}
      <TweetBox />

      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
