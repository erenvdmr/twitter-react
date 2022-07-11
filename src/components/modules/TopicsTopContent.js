import React from "react";
import More from "../../assets/icons/More-2.svg";

export default function TopicsTopContent({ title, tag, number }) {
  return (
    <div className="content">
      <div className="text">
        <p>{title}</p>
        <h4>{tag}</h4>
        <p>{number} K Tweet</p>
      </div>
      <div className="more">
        <img src={More} alt="" />
      </div>
    </div>
  );
}
