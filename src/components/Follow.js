import React from "react";
import FollowContent from "./FollowContent";

//

import Apple from "../assets/photos/apple.webp";
import Google from "../assets/photos/google.webp";
import Framer from "../assets/photos/framer.png";

export default function Follow() {
  return (
    <div className="follow">
      <div className="title">
        <h2>Who to follow</h2>
      </div>
      <div className="content">
        <FollowContent avatar={Apple} name="Apple" username="apple" />
        <FollowContent avatar={Framer} name="Framer" username="framer" />
        <FollowContent avatar={Google} name="Apple" username="google" />
      </div>

      <div className="show-more">
        <p>Show more</p>
      </div>
    </div>
  );
}
