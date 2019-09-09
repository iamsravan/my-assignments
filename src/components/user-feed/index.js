import React, { useState } from "react";
import "./style.css";
import userFeed from "./data.json";
import Feed from "./feed-component";
import NewFeed from "./new-feed-component";

function UserFeed() {
  const [feeds, setFeeds] = useState(userFeed.feed);
  const addMoreFeed = newFeedObject => {
    setFeeds([...feeds, newFeedObject]);
  };
  return (
    <div className="user-feed-layout">
      <h2>User Feed Exercise - Total Feeds: {feeds.length}</h2>
      <NewFeed addMoreFeed={addMoreFeed} />
      <h2> Feed List </h2>
      <div className="user-feeds">
        {feeds.map((feed, index) => {
          return <Feed feed={feed} key={`feed_${index}`} />;
        })}
      </div>
    </div>
  );
}

export default UserFeed;
