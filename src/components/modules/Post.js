import React from "react";

import More from "../../assets/icons/More-2.svg";
import Retweet from "../../assets/icons/Retweet.svg";
import Reply from "../../assets/icons/Reply.svg";
import Like from "../../assets/icons/React.svg";
import Share from "../../assets/icons/Share.svg";

export default function Post({
  name,
  username,
  text,
  avatar,
  retweet,
  reply,
  like,
}) {
  return (
    <div className="post">
      <div className="start">
        <div className="left">
          <img src={avatar} alt="" />
        </div>
        <div className="mid">
          <div className="user">
            <h4>{name}</h4>
            <p>@{username}</p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>

          <div className="tools">
            <div>
              <img src={Reply} alt="" />
              <p>{reply}</p>
            </div>

            <div>
              <img src={Retweet} alt="" />
              <p>{retweet}</p>
            </div>

            <div>
              <img src={Like} alt="" />
              <p>{like}</p>
            </div>

            <div>
              <img src={Share} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={More} alt="" />
      </div>
    </div>
  );
}
