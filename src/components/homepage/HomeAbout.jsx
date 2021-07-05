import React from "react";
import { Link } from "react-router-dom";
import madrasaImage from "../../assets/news.jpg";

const HomeAbout = () => {
  return (
    <section className="home-about-section">
      <div className="home-about">
        <h2 className="home-about_heading">Welcome to shamsul ulum madrasa</h2>
        <img className="img home-about_img" src={madrasaImage} alt="Madrasa" />
        <p className="home-about_details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quod sit nam. Soluta, alias architecto. Necessitatibus ullam accusamus
          quaerat distinctio quibusdam cumque autem. Possimus nisi modi
          excepturi debitis doloremque quaerat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Iste aliquid tempore aut recusandae quos
          voluptates accusamus magni nulla quam? Eum excepturi explicabo
          asperiores magni dicta repudiandae cumque maiores placeat quae!
        </p>
        <Link className="link home-about_learn-more" to="/about">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HomeAbout;
