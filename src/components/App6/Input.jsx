import React, { useState } from "react";
import { useDebounce } from "use-debounce";

export default function Input() {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);

  return (
    <div className="col mt-5">
      <div className="form-group">
        <input
          className="form-control mb-3"
          defaultValue={""}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <p>Actual value: {text}</p>
        <p>Debounce value: {value}</p>
      </div>
    </div>
  );
}
