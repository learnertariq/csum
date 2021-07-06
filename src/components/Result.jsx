import React, { useEffect, useState } from "react";
import http from "../service/http";
import resultService from "../service/resultService";

const Result = () => {
  const [uiClassNames, setUiClassNames] = useState([]);
  const [uiYears, setUiYears] = useState([]);
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [pdf, setPdf] = useState("");
  const [resultLoading, setResultLoading] = useState(false);
  const [uiDataLoading, setUiDataLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, msg: "" });

  const setInitialData = (cName, yName) => {
    setClassName(cName);
    setYear(yName);
  };

  const getUiData = async () => {
    setUiDataLoading(true);
    setError({ hasError: false });

    try {
      const { data } = await resultService.getUiData();
      console.log(data);
      setUiClassNames(data.data.classNames);
      setUiYears(data.data.years);
      setInitialData(data.data.classNames[0], data.data.years[0]);
      setUiDataLoading(false);
    } catch (ex) {
      if (ex.response) setError({ hasError: true, msg: ex.response.data.msg });
      setUiDataLoading(false);
    }
  };

  useEffect(() => {
    getUiData();
  }, []);

  const handleSearch = async () => {
    setResultLoading(true);
    setError({ hasError: false });
    setPdf(null);

    try {
      const { data } = await http.post("/result/download", {
        className,
        year,
      });

      setPdf(data.data.pdf);
      setResultLoading(false);
    } catch (ex) {
      if (ex.response) setError({ hasError: true, msg: ex.response.data.msg });
      setResultLoading(false);
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
              {uiClassNames.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
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
              {uiYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {error.hasError && <p className="error msg">{error.msg}</p>}
          {pdf && <p className="success msg">Click Download Button</p>}
          {resultLoading && <p className="msg">Loading..........</p>}

          <button
            onClick={handleSearch}
            className="btn btn--primary result_refress-btn"
          >
            Refress Result
          </button>
          <br />

          {resultLoading || !pdf ? (
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
