import React from "react";
import { Link } from "react-router-dom";

const Me = () => {
  return (
    <section className="me-section">
      <div className="me">
        <h2 style={{ textAlign: "center", color: "red" }}>Coming Soon......</h2>
        <div>
          <Link to="/resultUpload">Upload Result</Link>
          <Link to="/latestNewsUpload">Update Latest News</Link>
        </div>
      </div>
    </section>
  );
};

export default Me;
