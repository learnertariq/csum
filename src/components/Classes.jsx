import React from "react";

const data = [
  {
    _id: "a",
    className: "Unknown",
    students: "50",
    year: "2017",
  },
  {
    _id: "a",
    className: "Unknown",
    students: "40",
    year: "2017",
  },
  {
    _id: "a",
    className: "Unknown",
    students: "44",
    year: "2017",
  },
];

const Classes = () => {
  return (
    <section className="classes-info-section">
      <div className="classes-info">
        <h2 className="classes-info_heading">Classes Info</h2>
        {/* <Table data={data} /> */}
      </div>
    </section>
  );
};

export default Classes;
