import React from "react";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Topics from "./components/Topics";
import "./style/main.scss";

function App() {
  return (
    <div className="main">
      {/* SideBar */}
      <SideBar />
      {/* Feed */}
      <Feed />
      {/* Topics */}
      <Topics />
    </div>
  );
}

export default App;
