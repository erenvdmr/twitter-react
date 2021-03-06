import React from "react";
import { Link } from "react-router-dom";

import SideBarOptions from "../../modules/SideBarOptions";
import SideBarBottom from "../../modules/SideBarBottom";

import Logo from "../../../assets/icons/Twitter.svg";
import Home from "../../../assets/icons/Home.svg";
import Explore from "../../../assets/icons/Explore.svg";
import Notifications from "../../../assets/icons/Notifications.svg";
import Messages from "../../../assets/icons/Messages.svg";
import Bookmarks from "../../../assets/icons/Bookmarks.svg";
import Lists from "../../../assets/icons/Lists.svg";
import Profile from "../../../assets/icons/Profile.svg";
import More from "../../../assets/icons/More.svg";
import Tweet2 from "../../../assets/icons/Tweet2.svg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">
        {/* Logo */}
        <img src={Logo} alt="logo" className="logo" />

        {/* Options */}

        <Link to="/">
          <SideBarOptions icon={Home} text={"Home"} />
        </Link>
        <Link to="/explore">
          <SideBarOptions icon={Explore} text={"Explore"} />
        </Link>
        <Link to="/notifications">
          <SideBarOptions icon={Notifications} text={"Notifications"} />
        </Link>
        <Link to="/messages">
          <SideBarOptions icon={Messages} text={"Messages"} />
        </Link>

        <Link to="/bookmarks">
          <SideBarOptions icon={Bookmarks} text={"Bookmarks"} />
        </Link>

        <Link to="/lists">
          <SideBarOptions icon={Lists} text={"Lists"} />
        </Link>

        <Link to="/profile">
          <SideBarOptions icon={Profile} text={"Profile"} />
        </Link>

        <Link to="/more">
          <SideBarOptions icon={More} text={"More"} className="moree" />
        </Link>

        <button className="lg-tweet">Tweetle</button>

        <button className="md-tweet">
          <img src={Tweet2} alt="" />
        </button>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <SideBarBottom />
      </div>
    </div>
  );
}
