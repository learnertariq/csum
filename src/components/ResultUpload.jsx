import React, { useState } from "react";
import http from "../service/http";

const ResultUpload = () => {
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [pdf, setPdf] = useState("");

  const handleSubmit = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("className", className);
    bodyFormData.append("year", year);
    bodyFormData.append("pdf", pdf);

    const res = await http.post("/result", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res);
  };

  return (
    <section className="result-upload-section">
      <div className="result-upload">
        <div className="form">
          <div className="input-group">
            <label htmlFor="className">Class</label>
            <input
              type="text"
              id="className"
              name="className"
              value={className}
              onChange={({ target }) => setClassName(target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={year}
              onChange={({ target }) => setYear(target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="pdf">Year</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              onChange={({ target }) => setPdf(target.files[0])}
            />
          </div>
          <button onClick={handleSubmit}>Upload</button>
        </div>
      </div>
    </section>
  );
};

export default ResultUpload;
