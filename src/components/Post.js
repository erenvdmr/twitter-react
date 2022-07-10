import React from "react";
import Avatar from "../assets/photos/figma.png";
import More from "../assets/icons/More-2.svg";
import Retweet from "../assets/icons/Retweet.svg";
import Reply from "../assets/icons/Reply.svg";
import Like from "../assets/icons/React.svg";
import Share from "../assets/icons/Share.svg";
import PostPhoto from "../assets/photos/post.jpeg";

export default function Post({ name, username, text, image, avatar }) {
  return (
    <div className="post">
      <div className="left">
        <img src={Avatar} alt="" />
      </div>
      <div className="mid">
        <div className="user">
          <h4>Figma</h4>
          <p>@figma</p>
        </div>
        <div className="text">
          <p>
            Didn’t think we would stop at one did you? 😎 Come say hallo to us
            as we celebrate the opening of our second office this week…
          </p>
        </div>
        <div className="image">
          <img src={PostPhoto} alt="" />
        </div>

        <div className="tools">
          <div>
            <img src={Reply} alt="" />
            <p>2</p>
          </div>

          <div>
            <img src={Retweet} alt="" />
            <p>2</p>
          </div>

          <div>
            <img src={Like} alt="" />
            <p>2</p>
          </div>

          <div>
            <img src={Share} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={More} alt="" />
      </div>
    </div>
  );
}
