import React, { useState } from "react";
import http from "../service/http";

const Result = () => {
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [pdf, setPdf] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ hasError: false, msg: "" });

  const handleSearch = async () => {
    setLoading(true);
    setError({ hasError: false });

    try {
      const { data } = await http.post("/result/download", {
        className,
        year,
      });

      setPdf(data.data.pdf);
      setLoading(false);
    } catch (ex) {
      if (ex.response) setError({ hasError: true, msg: ex.response.data.msg });
    }
  };

  return (
    <section className="result-section">
      <div className="result">
        <h2 className="result_heading">Result</h2>
        <div className="result_form">
          <div className="form-group">
            <label htmlFor="className">Class</label>
            <br />
            <select
              name="className"
              id="className"
              value={className}
              onChange={({ target }) => {
                setClassName(target.value);
              }}
            >
              <option value="class 1">Class 1</option>
              <option value="class 2">Class 2</option>
              <option value="class 3">Class 3</option>
              <option value="class 10">Class 10</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <br />
            <select
              name="year"
              id="year"
              value={year}
              onChange={({ target }) => setYear(target.value)}
            >
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          {error.hasError && <p className="error">{error.msg}</p>}
          <button
            onClick={handleSearch}
            className="btn btn--primary result_refress-btn"
          >
            Refress Result
          </button>
          <br />

          {loading ? (
            <a className="btn btn--danger result_download-btn disabled">
              Download
            </a>
          ) : (
            <a
              href={`data:application/pdf;base64,${pdf}`}
              download="result.pdf"
              className="btn btn--danger result_download-btn"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Result;
