import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div className="mb-3 h5 text-warning">
          Count +1/-1 : <span className="text-danger">{count}</span>
        </div>

        <div className="btn-toolbar" role="toolbar">
          <div className="btn-group" role="group" aria-label="">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatch("increment")}
            >
              Increment
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatch("decrement")}
            >
              Decrement
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatch("reset")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-3 h5 text-warning">
          Count +1/-1 : <span className="text-danger">{countTwo}</span>
        </div>

        <div className="btn-toolbar" role="toolbar">
          <div className="btn-group" role="group" aria-label="">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatchTwo("increment")}
            >
              Increment
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatchTwo("decrement")}
            >
              Decrement
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => dispatchTwo("reset")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
