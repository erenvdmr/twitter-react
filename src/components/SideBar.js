import React from "react";
import SideBarOptions from "./SideBarOptions";
import SideBarBottom from "./SideBarBottom";

import Logo from "../assets/icons/Twitter.svg";
import Home from "../assets/icons/Home.svg";
import Explore from "../assets/icons/Explore.svg";
import Notifications from "../assets/icons/Notifications.svg";
import Messages from "../assets/icons/Messages.svg";
import Bookmarks from "../assets/icons/Bookmarks.svg";
import Lists from "../assets/icons/Lists.svg";
import Profile from "../assets/icons/Profile.svg";
import More from "../assets/icons/More.svg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">
        {/* Logo */}
        <img src={Logo} alt="logo" className="logo" />

        {/* Options */}
        <SideBarOptions icon={Home} text={"Home"} />
        <SideBarOptions icon={Explore} text={"Explore"} />
        <SideBarOptions icon={Notifications} text={"Notifications"} />
        <SideBarOptions icon={Messages} text={"Messages"} />
        <SideBarOptions icon={Bookmarks} text={"Bookmarks"} />
        <SideBarOptions icon={Lists} text={"Lists"} />
        <SideBarOptions icon={Profile} text={"Profile"} />
        <SideBarOptions icon={More} text={"More"} />
        <button className="lg-tweet">Tweetle</button>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <SideBarBottom />
      </div>
    </div>
  );
}
