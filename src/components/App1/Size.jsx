import React from "react";

export default function Size(props) {
  const { defaultValue, newSize } = props;
  function changeSize(x) {
    newSize(x);
  }
  return (
    <div className="card">
      <div className="card-header bg-success text-white text-uppercase">
        Size
      </div>
      <div className="card-body">
        <p>{defaultValue.size} px</p>
        <button
          type="button"
          className="btn btn-info mr-3"
          onClick={() => changeSize(2)}
        >
          Up
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => changeSize(-2)}
        >
          Down
        </button>
      </div>
    </div>
  );
}
