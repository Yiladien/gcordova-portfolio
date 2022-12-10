import React from "react";
import ProjectList from "../ProjectList";

const Portfolio = () => {
  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-three-quarters-desktop">
          <div className="container">
            <p className="title is-4 has-text-white mb-6 px-6">Portfolio</p>
          </div>
          <div className="container">
            <div className="columns is-desktop is-flex-wrap-wrap is-justify-content-space-evenly	">
              <ProjectList />
              <div className="column is-12-desktop"></div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Portfolio;
