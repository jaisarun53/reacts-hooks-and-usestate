import React, { useState } from "react";

const DisplayName = () => {
  const [studentName, setstudentName] = useState("Arun");
  return (
    <div>
      <h1>{studentName}</h1>
      <button
        onClick={() => {
          setstudentName("Payal");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default DisplayName;
