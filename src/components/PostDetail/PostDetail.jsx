import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div className="user">
      <h3>Post detail about : {id}</h3>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
