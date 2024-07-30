import React from "react";
import aboutImg from "../assets/aboutImg.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      {" "}
      <div className="about">
        <div className="container">
          <img src={aboutImg} alt="aboutImg" className="img" />
        </div>
        <div className="about-info">
          <div className="container">
            <h1>hi, I am Athena</h1>
            <p>
              I'm a mother of two beautiful girls in Seattle, WA. Ever since I
              could remember, I have always been coming up with new ideas and
              creatively bringing them to life. As someone who has been pursuing
              their passions since a young age, I can proudly say that hard work
              truly pays off.
            </p>
            <p>
              I view my career as a continuously learning experience that
              evolves with each project and collaboration. With a dedication to
              functionality and a curiosity for what lies ahead, I strive to
              keep my work practical, relevant, and innovative. Please check out
              my past projects, and feel free to reach out with any questions.
            </p>
          </div>
        </div>
      </div>
      <Link to="/" className="btn link">
        back to home
      </Link>
    </div>
  );
};

export default About;
