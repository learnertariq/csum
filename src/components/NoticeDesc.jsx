import React from "react";
import { Link } from "react-router-dom";

const NoticeDesc = () => {
  return (
    <section className="notice-desc-section">
      <div className="notice-desc">
        <h2 className="notice-desc_heading"> Notice Description</h2>
        <p className="notice-desc_body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, ut
          temporibus! Minus quibusdam deserunt voluptates aliquam accusantium,
          necessitatibus ad minima neque laborum, atque aperiam culpa? Vero,
          ipsam. Illum, hic excepturi consectetur reprehenderit odit nobis. Quam
          inventore voluptatem tempora laboriosam accusantium repudiandae hic
          quibusdam impedit aliquid aliquam. Consequuntur, sed iure hic nam
          magni totam quo iste ut corporis, minus maiores ipsam? Explicabo,
          pariatur, atque animi a, vitae delectus nam magnam illo autem alias
          placeat consequuntur error deleniti veniam! Accusamus nemo quasi
          quisquam recusandae aspernatur excepturi tempora ex corrupti dolor
          laboriosam dolorum magnam cupiditate natus, dolorem fugit alias quo
          provident non nesciunt.
        </p>
        <Link className="link notice-desc_all-notices-link" to="/notices">
          View All Notices
        </Link>
      </div>
    </section>
  );
};

export default NoticeDesc;
