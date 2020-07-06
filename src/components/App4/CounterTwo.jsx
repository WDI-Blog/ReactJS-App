import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="mb-3 h5 text-success">
        Count 1 --> +5/-5 :{" "}
        <span className="text-danger">{count.firstCounter}</span>
      </div>
      <div className="mb-3 h5 text-success">
        Count 2 --> +3/-3 :{" "}
        <span className="text-danger">{count.secondCounter}</span>
      </div>
      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group" role="group" aria-label="">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch({ type: "increment", value: 5 })}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch({ type: "decrement", value: 5 })}
          >
            Decrement
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch({ type: "increment2", value: 3 })}
          >
            Increment 2
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch({ type: "decrement2", value: 3 })}
          >
            Decrement 2
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
