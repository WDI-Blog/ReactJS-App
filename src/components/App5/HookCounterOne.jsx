import React, { useState } from "react";

export default function HookCounterOne() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <div className="mb-3 h5 text-primary">
        Count : <span className="text-danger">{count}</span>
      </div>

      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group" role="group" aria-label="">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount(initialCount)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
