import React, { useState } from "react";

function randomColor() {
  const colors = ["red", "green", "blue", "orange", "black", "deeppink"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  let color = colors[randomIndex];
  return color;
}
export default function ColorBox() {
  const [style, setStyle] = useState(() => {
    const initColor = localStorage.getItem("color") || "red";
    console.log(initColor);
    return {
      width: "100px",
      height: "100px",
      display: "inline-block",
      background: initColor,
      transition: "background 0.2s",
      cursor: "pointer",
      borderRadius: "50%",
    };
  });
  function handleClick() {
    const color = randomColor();
    setStyle((values) => {
      return { ...values, background: color };
    });
    localStorage.setItem("color", color);
  }
  return (
    <div className="container mt-5">
      <div className="row p-5" style={{ border: "1px solid #ccc" }}>
        <div className="col-md-12 text-center">
          <div style={style} onClick={() => handleClick()}></div>
        </div>
      </div>
    </div>
  );
}
