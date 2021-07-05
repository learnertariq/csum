import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    _id: "aaa",
    title: "title1",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
  {
    _id: "aaa",
    title: "title2",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
  {
    _id: "aaa",
    title: "title3",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
  {
    _id: "aaa",
    title: "title3",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
  {
    _id: "aaa",
    title: "title3",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
  {
    _id: "aaa",
    title: "title3",
    body: "kjas;dl fkja;sld kfjlasdk jfjlasdk jflaskdj flsadkjfla skdjfsal sdjfalskd l aksdjflksad laskdjf las lasdjif aos fjlasdkf als fjalsd ikasldk jasldf jaslasd k",
  },
];

const Notice = () => {
  return (
    <section className="notice-section">
      <div className="notice">
        <h2 className="notice_heading">Notice</h2>
        <div className="notice_body">
          {data.map((notice) => (
            <Link className="link notice_link" to={`/notices/${notice._id}`}>
              <p className="notice_notice">{notice.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notice;
