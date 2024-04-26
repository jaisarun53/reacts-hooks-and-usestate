import React, { useState } from "react";

const DisplayName = () => {
  const [studentName, setstudentName] = useState("");
  return (
    <div>
      <h1>{studentName}</h1>
      <input
        type="text"
        onChange={(event) => {
          const newValue = event.target.value;
          setstudentName(newValue);
        }}
      />
    </div>
  );
};

export default DisplayName;
