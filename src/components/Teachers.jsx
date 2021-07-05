import React from "react";
import Table from "./common/Table";

const data = [
  {
    _id: "a",
    name: "Unknown",
    position: "Muhtamim",
  },
  {
    _id: "a",
    name: "Unknown",
    position: "Nayebe Muhtamim",
  },
  {
    _id: "a",
    name: "Unknown",
    position: "Assistant",
  },
];

const Teachers = () => {
  return (
    <section className="teachers-info-section">
      <div className="teachers-info">
        <h2 className="teachers-info_heading">Teachers Info</h2>
        <Table data={data} />
      </div>
    </section>
  );
};

export default Teachers;
