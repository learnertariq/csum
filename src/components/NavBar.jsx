import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav_home-link">
          <h1 className="nav_heading">শামসুল উলুম মাদরাসা</h1>
        </Link>

        {/* <div className="nav_email">example@email.com</div> */}
        <ul className="list nav_list">
          <li className="list_item nav_item">
            <Link to="/result" className="link nav_link">
              রেজাল্ট
            </Link>
          </li>
          <li className="list_item nav_item">
            <Link to="/about" className="link nav_link">
              মাদরাসা পরিচিতি
            </Link>
          </li>
          <li className="list_item nav_item">
            <Link to="/notices" className="link nav_link">
              নোটিস
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
