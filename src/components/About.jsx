import React from "react";
import madrasaImage from "../assets/news.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about">
        <h2 className="about_heading">Welcome to shamsul ulum madrasa</h2>
        <img className="img about_img" src={madrasaImage} alt="Madrasa" />
        <p className="about_details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quod sit nam. Soluta, alias architecto. Necessitatibus ullam accusamus
          quaerat distinctio quibusdam cumque autem. Possimus nisi modi
          excepturi debitis doloremque quaerat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Iste aliquid tempore aut recusandae quos
          voluptates accusamus magni nulla quam? Eum excepturi explicabo
          asperiores magni dicta repudiandae cumque maiores placeat quae!
        </p>
      </div>
    </section>
  );
};

export default About;
