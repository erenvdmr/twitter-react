import React from "react";
import SearchBar from "./SearchBar";
import TopicsTop from "./TopicsTop";
import Follow from "./Follow";

export default function Topics() {
  return (
    <div className="topics">
      {/* Search Bar */}
      <SearchBar />
      {/* Top */}
      <TopicsTop />
      {/* Follow */}
      <Follow />
    </div>
  );
}
