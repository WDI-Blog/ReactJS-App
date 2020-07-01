import React, { useState } from "react";
import Color from "./Color";
import Size from "./Size";
import Text from "./Text";
import Result from "./Result";

export default function App1() {
  const [defaultValue, setNewValue] = useState({
    color: "red",
    size: 16,
    text: "Hello World",
  });
  function setNewColor(color) {
    setNewValue((values) => {
      return { ...values, color: color };
    });
  }
  function setNewSize(x) {
    if (defaultValue.size > 0 && defaultValue.size < 36) {
      setNewValue((values) => {
        return { ...values, size: defaultValue.size + x };
      });
    }
  }
  function setNewText(text) {
    setNewValue((values) => {
      return { ...values, text: text };
    });
  }
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-4">
          <Color defaultValue={defaultValue} newColor={setNewColor} />
        </div>
        <div className="col-md-4">
          <Size defaultValue={defaultValue} newSize={setNewSize} />
        </div>
        <div className="col-md-4">
          <Text defaultValue={defaultValue} newText={setNewText} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Result defaultValue={defaultValue} />
        </div>
      </div>
    </div>
  );
}
