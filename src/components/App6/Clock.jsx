import React, { useState, useEffect } from "react";

function formatDate(date) {
  if (!date) return;

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();

      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    // cleanup
    return () => {
      console.log("Clock Cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return <h3 className="text-success mt-5">{timeString}</h3>;
}

export default Clock;
