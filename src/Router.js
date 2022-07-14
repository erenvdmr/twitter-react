import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import SideBar from "./components/pages/layout/SideBar";
import Feed from "./components/pages/layout/Feed";
import Topics from "./components/pages/layout/Topics";
import Profile from "./components/pages/pages/Profile";
import Bookmarks from "./components/pages/pages/Bookmarks";
import Explore from "./components/pages/pages/Explore";
import Messages from "./components/pages/pages/Messages";
import Notifications from "./components/pages/pages/Notifications";
import List from "./components/pages/pages/List";

export default function Routers() {
  return (
    <BrowserRouter>
      <div className="main">
        <SideBar />

        <Routes>
          <Route path="" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/lists" element={<List />} />
        </Routes>
        <Topics />
      </div>
    </BrowserRouter>
  );
}

// //Components
// import SideBar from "./layout/SideBar";
// import Feed from "./layout/Feed";
// import Topics from "./layout/Topics";

// function Home() {
//   return (
//     <div className="main">
//       {/* SideBar */}
//       <SideBar />
//       {/* Feed */}
//       <Feed />
//       {/* Topics */}
//       <Topics />
//     </div>
//   );
// }

// export default Home;
