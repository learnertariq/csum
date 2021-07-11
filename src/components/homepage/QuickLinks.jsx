import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    text: "Documents",
    link: "/documents",
  },
  {
    text: "কমিটি তথ্য",
    link: "/committe",
  },
  {
    text: "শিক্ষকমন্ডলী তথ্য",
    link: "/teachers",
  },
  {
    text: "শ্রেণী তথ্য",
    link: "/classes",
  },
  {
    text: "হিসাব বিভাগ",
    link: "/accounts",
  },
];

const QuickLinks = () => {
  return (
    <section className="quick-links">
      <h2 className="quick-links_heading">ঝটপট লিংকস্‌</h2>
      <ul className="list quick-links_list">
        {data.map((item) => (
          <li className="list_item quick-links_item">
            <Link to={item.link} className="link quick-links_link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickLinks;
