import React from "react";
import Header from "./Header";
import TweetBox from "./TweetBox";
import Post from "./Post";

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
