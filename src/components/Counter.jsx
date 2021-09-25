import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 10) {
          return 10;
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1>counter:{counter}</h1>
    </div>
  );
}
