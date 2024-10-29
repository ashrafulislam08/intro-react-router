import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  const slicedPosts = posts.slice(0, 10);
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div className="users">
        {slicedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
