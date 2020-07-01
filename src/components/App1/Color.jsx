import React, { useState } from "react";

export default function Color(props) {
  const [colors] = useState(["red", "green", "blue", "orange", "pink"]);

  const { defaultValue, newColor } = props;
  const boxColor = colors.map((color, index) => {
    return (
      <span
        key={index}
        className={color === defaultValue.color ? "activeBox" : ""}
        id="boxStyle"
        style={{ background: color }}
        onClick={() => handleClick(color)}
      />
    );
  });
  function handleClick(color) {
    newColor(color);
  }
  return (
    <div className="card">
      <div className="card-header bg-primary text-white text-uppercase">
        Color
      </div>
      <div className="card-body">
        {boxColor}
        {/* <p>{defaultValue.color}</p> */}
      </div>
    </div>
  );
}
