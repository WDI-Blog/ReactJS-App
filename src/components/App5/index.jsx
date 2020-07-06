import React from "react";
import HookCounterOne from "./HookCounterOne";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";

export default function App5() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h3>useState with previous state</h3>
          <HookCounterOne />
        </div>
        <div className="col-md-12 mt-5">
          <h3>useState with object</h3>
          <HookCounterTwo />
        </div>
        <div className="col-md-12 mt-5">
          <h3>useState with array</h3>
          <HookCounterThree />
        </div>
      </div>
      <div style={{ height: "10rem" }}></div>
    </div>
  );
}
