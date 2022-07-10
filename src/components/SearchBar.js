import React from "react";
import Search from "../assets/icons/Search.svg";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="searchbar">
        <img src={Search} alt="" />
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>
  );
}
