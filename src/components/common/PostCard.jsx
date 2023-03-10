import React from "react";

const PostCard = ({ props }) => {
  return (
    <div className="card w-75 m-2">
      <div className="card-body">
        <h4 className="card-title">{props.user_id}</h4>
        <h2 className="card-title">{props.title}</h2>
        <div className="card-text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
