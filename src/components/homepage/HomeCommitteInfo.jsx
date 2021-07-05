import React from "react";
import { Link } from "react-router-dom";
import Table from "../common/Table";

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
];

const HomeCommitteInfo = () => {
  return (
    <section className="home-committe-info-section">
      <div className="home-committe-info">
        <h2 className="home-committe-info_heading">Committe Info</h2>
        <Table data={data} />
        <Link className="link home-committe-info_learn-more" to="/committe">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HomeCommitteInfo;
