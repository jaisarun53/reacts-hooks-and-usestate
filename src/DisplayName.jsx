import React, { useState } from "react";

const DisplayName = () => {
  const [studentName, setstudentName] = useState("Arun");
  return (
    <div>
      <h1>{studentName}</h1>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default DisplayName;
