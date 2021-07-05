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
];

const HomeNotice = () => {
  return (
    <section className="home-notice-section">
      <div className="home-notice">
        <h2 className="home-notice_heading">Notice</h2>
        <div className="home-notice_body">
          {data.map((notice) => (
            <Link
              className="link home-notice_link"
              to={`/notices/${notice._id}`}
            >
              <p className="home-notice_notice">{notice.body}</p>
            </Link>
          ))}
        </div>
        <Link className="link home-notice_all-notices-link" to="/notices">
          View All Notices
        </Link>
      </div>
    </section>
  );
};

export default HomeNotice;
