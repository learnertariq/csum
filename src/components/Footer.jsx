import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ user }) => {
  return (
    <footer className="footer-section">
      <div className="footer">
        <div className="footer_contacts">
          <Link to="/" className="footer_home-link">
            <h1 className="footer_heading">শামসুল উলুম মাদরাসা</h1>
          </Link>
          <div className="footer_address">চাঁদখালী, পাইকগাছা, খুলনা</div>
          <div className="footer_phone">+880 1768 509583</div>
          <div className="footer_phone">+880 1735 475756</div>
          <div className="footer_email">example@email.com</div>
        </div>
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
        <div className="footer_links footer_user-links">
          <ul className="list footer_list">
            {!user && (
              <>
                <li className="list_item footer_item">
                  <Link to="/login" className="link footer_link">
                    Login
                  </Link>
                </li>
                <li className="list_item footer_item">
                  <Link to="/register" className="link footer_link">
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="list_item footer_item">
                  <Link to="/me" className="link footer_link">
                    {user.name}
                  </Link>
                </li>
                <li className="list_item footer_item">
                  <Link to="/logout" className="link footer_link">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
