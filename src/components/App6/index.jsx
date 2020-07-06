import React, { useState, useEffect } from "react";
import PostList from "./PostList";

function App6() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }
    console.log("POST list effect");
    fetchPostList();
  }, []);

  useEffect(() => {
    console.log("TODO list effect");
  });

  return (
    <div>
      <h1>ReactJS Hooks</h1>
      <PostList posts={postList} />
    </div>
  );
}

export default App6;
