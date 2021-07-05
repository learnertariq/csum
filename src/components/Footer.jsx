import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer">
        <Link to="/" className="footer_home-link">
          <h1 className="footer_heading">শামসুল উলুম মাদরাসা</h1>
        </Link>
        <div className="footer_links">
          <ul className="list footer_list">
            <li className="list_item footer_item">
              <Link to="/result" className="link footer_link">
                রেজাল্ট
              </Link>
            </li>
            <li className="list_item footer_item">
              <Link to="/about" className="link footer_link">
                মাদরাসা পরিচিতি
              </Link>
            </li>
            <li className="list_item footer_item">
              <Link to="/notices" className="link footer_link">
                নোটিস
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_contacts">
          <div className="footer_phone">+৮৮০ ১৭১১ ১১১১১১</div>
          <div className="footer_email">example@email.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
