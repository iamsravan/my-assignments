import React, { useState } from "react";
import moment from "moment";

function Feed({ feed }) {
  const { user, value, timestamp, likes } = feed;
  const [userLikes, setLikes] = useState(likes);
  const date = moment(parseInt(timestamp, 0)).format(
    "Do MMMM, YYYY, h:mm:ss a"
  );
  return (
    <div className="feed">
      <h4>Name: {user}</h4>
      <h4>Comment: {value}</h4>
      <h4>Updated On: {date} </h4>
      <h4>Likes: {userLikes}</h4>
      <button class="like-btn" onClick={() => setLikes(userLikes + 1)}>
        Like It!
      </button>
    </div>
  );
}

export default Feed;
