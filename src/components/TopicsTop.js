import React from "react";
import TopicsTopContent from "./TopicsTopContent";

export default function TopicsTop() {
  return (
    <div className="topics-top">
      <h2 className="title">Topics you interested</h2>
      <TopicsTopContent title="Sport" tag="Ronaldo" number="17" />
      <TopicsTopContent title="Earth" tag="Turkey" number="57" />
      <TopicsTopContent title="Movie, Series" tag="Vikings" number="2.2" />
      <TopicsTopContent title="Technology" tag="Apple" number="79" />
      <TopicsTopContent title="Software" tag="JavaScript" number="129" />

      <div className="show-more">
        <p>Show more</p>
      </div>
    </div>
  );
}
