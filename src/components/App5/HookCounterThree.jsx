import React, { useState } from "react";

export default function HookCounterThree() {
  const [items, setItems] = useState([]);
  function addNewNumber() {
    setItems([
      ...items,
      {
        id: items.length,
        number: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => addNewNumber()}
      >
        Add Number
      </button>
      <ul class="list-group">
        {items.map((item) => {
          return (
            <li class="list-group-item" key={item.id}>
              {item.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
