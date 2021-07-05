import React, { useEffect, useState } from "react";
import http from "../../service/http";

const LatestNews = () => {
  const [news, setNews] = useState("");
  const [img, setImg] = useState("");

  const populateData = async () => {
    try {
      const { data } = await http.get("/latestNews");

      setNews(data.data.news);
      setImg(data.data.img);
    } catch (ex) {
      // if (ex.response) setError({ hasError: true, msg: ex.response.data.msg });
    }
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <section className="latest-news">
      {img && (
        <img
          className="img latest-news_img"
          src={`data:images/jpeg;base64,${img}`}
          alt="কম্পিউটার প্রশিক্ষন"
        />
      )}
      {news && <marquee className="latest-news_text">{news}</marquee>}
    </section>
  );
};

export default LatestNews;
