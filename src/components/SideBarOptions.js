import React from "react";

export default function SideBarOptions({ text, icon }) {
  return (
    <div className="sidebar-options">
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}
