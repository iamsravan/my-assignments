import React, { useState } from "react";

function NewFeed(props) {
  const { addMoreFeed = () => {} } = props;
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const buttonDisabled = !userName.length || !comment.length;
  const buttonClass = buttonDisabled ? "add-button-disabled" : "add-button";
  const addNewFeed = () => {
    addMoreFeed({
      user: userName,
      value: comment,
      timestamp: new Date().getTime(),
      likes: 0
    });
    setComment("");
    setUserName("");
  };
  return (
    <div className="new-feed-layout">
      <h2> Add New Feed</h2>
      <input
        className="user-name"
        placeholder="Enter User Name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        className="comment"
        placeholder="Enter a comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button
        className={buttonClass}
        onClick={() => addNewFeed()}
        disabled={!userName.length || !comment.length}
      >
        Add Feed
      </button>
    </div>
  );
}

export default NewFeed;
