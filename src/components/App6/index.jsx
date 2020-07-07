import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import Pagination from "./Pagination";
import queryString from "query-string";
import PostFiltersForm from "./PostFiltersForm";
import Input from "./Input";
import Clock from "./Clock";

function App6() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [nowPage, setNowPage] = useState("1");

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }
    // console.log("POST list effect");
    fetchPostList();
  }, [filters]);

  // useEffect(() => {
  //   console.log("TODO list effect");
  // });

  function handlePageChange(newPage) {
    console.log("New Page : ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
    setNowPage(newPage);
  }
  function handleFilterChange(newFilters) {
    console.log("New Filters : ", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="container mt-5">
      <h1>ReactJS useEffect / useRef / useDebounce</h1>
      <PostFiltersForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <h4 className="text-primary">{nowPage}</h4>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <Input />
      {showClock && <Clock />}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setShowClock(false)}
      >
        Delete Clock
      </button>
      <div style={{ height: "10rem" }}></div>
    </div>
  );
}

export default App6;
