import React from "react";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  return <div>Posts: {posts.length}</div>;
};

export default Posts;
