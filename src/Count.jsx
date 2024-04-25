import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);
  console.log("count", count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log("Hi");
          const newCount = count + 1;
          setcount(newCount);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Count;
