import React from "react";

export default function Result(props) {
  const { defaultValue } = props;
  return (
    <div className="card">
      <div className="card-header bg-danger text-white text-uppercase">
        Result
      </div>
      <div className="card-body">
        <h3 style={{ color: defaultValue.color, fontSize: defaultValue.size }}>
          {defaultValue.text}
        </h3>
      </div>
    </div>
  );
}
