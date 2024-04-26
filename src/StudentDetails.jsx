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
      {/* name field */}
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            const newName = event.target.value;
            setStudentinfo({ ...studentinfo, name: newName });
          }}
        />
      </div>
      {/* age Field */}
      <div>
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            const newAge = event.target.value;
            setStudentinfo({ ...studentinfo, age: newAge });
          }}
        />
      </div>
    </div>
  );
};

export default StudentDetails;
