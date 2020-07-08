import React from "react";

function Posts({ posts, loading }) {
  return (
    <ul className="list-group mt-3">
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
