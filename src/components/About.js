import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about">
        {" "}
        <Link to="/">User list</Link>
        <Link to="/admin">Adnim Panel</Link>
      </div>
      <p>There is nothing here, because it's simple app.</p>
    </>
  );
};

export default About;
