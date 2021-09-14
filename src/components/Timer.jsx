import React from "react";

import { useState, useEffect } from "react";

export default function Timer({ startTimer, endTimer }) {
  const [timer, setTimer] = useState(startTimer);
  console.log(startTimer);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((preVal) => {
        if (preVal >= endTimer) {
          clearInterval(id);
          return preVal;
        }
        return preVal + 1;
      });
    }, 1000);
  }, [endTimer]);
  return (
    <div>
      <h1>count:{timer}</h1>
    </div>
  );
}
