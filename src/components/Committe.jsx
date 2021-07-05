import React from "react";
import Table from "./common/Table";

const data = [
  {
    _id: "a",
    name: "Unknown",
    position: "Moderator",
  },
  {
    _id: "b",
    name: "Unknown",
    position: "Principal",
  },
  {
    _id: "c",
    name: "Unknown",
    position: "Assistant Principal",
  },
  {
    _id: "d",
    name: "Unknown",
    position: "Moderator",
  },
  {
    _id: "d",
    name: "Unknown",
    position: "Principal",
  },
  {
    _id: "f",
    name: "Unknown",
    position: "Assistant Principal",
  },
];

const Committe = () => {
  return (
    <section className="committe-info-section">
      <div className="committe-info">
        <h2 className="committe-info_heading">Committe Info</h2>
        <Table data={data} />
      </div>
    </section>
  );
};

export default Committe;
