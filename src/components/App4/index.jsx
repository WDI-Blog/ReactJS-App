import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";

export default function App4() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h3>useReducer (simple state & action)</h3>
          <CounterOne />
        </div>

        <div className="col-md-12 mt-5">
          <h3>useReducer (complex state & action)</h3>
          <CounterTwo />
        </div>

        <div className="col-md-12 mt-5">
          <h3>Multiple useReducers</h3>
          <CounterThree />
        </div>
      </div>
      <div style={{ height: "10rem" }}></div>
    </div>
  );
}
