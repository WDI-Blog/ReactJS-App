import React, { useState } from "react";

export default function Text(props) {
  const [texts] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Wordpress",
  ]);

  const { newText } = props;

  const boxText = texts.map((text, index) => {
    return (
      <span
        key={index}
        className="badge badge-pill badge-warning mr-3 mb-3"
        onClick={() => handleClick(text)}
      >
        {text}
      </span>
    );
  });
  function handleClick(text) {
    newText(text);
  }
  return (
    <div className="card">
      <div className="card-header bg-warning text-white text-uppercase">
        Text
      </div>
      <div className="card-body">{boxText}</div>
    </div>
  );
}
