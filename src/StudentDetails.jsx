import React, { useState } from "react";

const StudentDetails = () => {
  const [studentinfo, setStudentinfo] = useState({
    name: "Payal",
    age: 22,
    collage: "ismt",
  });
  return (
    <div>
      <h1>{studentinfo.name}</h1>
      <h3>Age:{studentinfo.age}</h3>
      <p>Enrolled collage:{studentinfo.collage}</p>
      <button
        onClick={() => {
          setStudentinfo({ name: "Arun", age: 21, collage: "Aroma" });
        }}
      >
        Change me
      </button>
    </div>
  );
};

export default StudentDetails;
