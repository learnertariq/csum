import React, { useState } from "react";
import http from "../service/http";

const ResultUpload = () => {
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [pdf, setPdf] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, msg: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError({ hasError: false });
    setSuccess(false);

    const bodyFormData = new FormData();
    bodyFormData.append("className", className);
    bodyFormData.append("year", year);
    bodyFormData.append("pdf", pdf);

    try {
      const res = await http.post("/result", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);
      setSuccess(true);
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
        setError({ hasError: true, msg: ex.response.data.msg });
      }
    }
    setLoading(false);
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
          {loading && <p className="msg">loading.....</p>}
          {error.hasError && <p className="error msg">{error.msg}</p>}
          {success && (
            <p className="success msg">"Result successfully upladed"</p>
          )}

          <button onClick={handleSubmit}>Upload</button>
        </div>
      </div>
    </section>
  );
};

export default ResultUpload;
