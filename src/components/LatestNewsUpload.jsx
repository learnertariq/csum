import React, { useState } from "react";
import http from "../service/http";

function LatestNewsUpload() {
  const [news, setNews] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("news", news);
    bodyFormData.append("img", img);

    const res = await http.post("/latestNews", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res);
  };

  return (
    <section className="latestNews-upload-section">
      <div className="latestNews-upload">
        <div className="form">
          <div className="input-group">
            <label htmlFor="news">News</label>
            <input
              type="text"
              id="news"
              name="news"
              value={news}
              onChange={({ target }) => setNews(target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="img">Year</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={({ target }) => setImg(target.files[0])}
            />
          </div>
          <button onClick={handleSubmit}>Change Latest News</button>
        </div>
      </div>
    </section>
  );
}

export default LatestNewsUpload;
