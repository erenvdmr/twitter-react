import React from "react";
import SearchBar from "../../modules/SearchBar";
import TopicsTop from "../../modules/TopicsTop";
import Follow from "../../modules/Follow";

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
