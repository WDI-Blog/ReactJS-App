import React, { useState } from "react";

export default function HookCounterTwo() {
  const [name, setName] = useState(() => {
    const initFirstName = localStorage.getItem("firstName") || "";
    const initLastName = localStorage.getItem("lastName") || "";
    return { firstName: initFirstName, lastName: initLastName, city: "" };
  });

  function handleClick1(e) {
    const newFirstName = e.target.value;
    setName({ ...name, firstName: newFirstName });
    localStorage.setItem("firstName", newFirstName);
  }
  function handleClick2(e) {
    const newLastName = e.target.value;
    setName({ ...name, lastName: newLastName });
    localStorage.setItem("lastName", newLastName);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label className="mr-3">FirstName : </label>
          <input
            type="text"
            className="form-control"
            placeholder="firstName..."
            value={name.firstName}
            onChange={(e) => handleClick1(e)}
          />
        </div>
        <div className="form-group">
          <label className="mr-3">LastName : </label>
          <input
            type="text"
            className="form-control"
            placeholder="lastName..."
            value={name.lastName}
            onChange={(e) => handleClick2(e)}
          />
        </div>
        <div className="form-group">
          <label className="mr-3">City : </label>
          <input
            type="text"
            className="form-control"
            placeholder="city..."
            value={name.city}
            onChange={(e) => {
              setName({ ...name, city: e.target.value });
            }}
          />
        </div>
      </form>
      <br />
      <h4>FirstName : {name.firstName}</h4>
      <h4>LastName : {name.lastName}</h4>
      <h4>City : {name.city}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </div>
  );
}
