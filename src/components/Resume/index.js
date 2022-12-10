import React from "react";

const Resume = () => {
  return (
    <>
      <div className="section">
        <div className="columns is-desktop">
          <div className="column"></div>
          <div className="column is-three-quarters-desktop">
            <div className="container">
              <p className="title is-4 has-text-white mb-6 ">Resume</p>
            </div>
            <div className="title is-4 has-text-white mb-2">
              Front-end Proficiencies
            </div>
            <dl className="has-text-white pl-4 mb-6">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
            </dl>
            <div className="title is-4 has-text-white mb-2">
              Back-end Proficiencies
            </div>
            <dl className="has-text-white pl-4">
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL & Sequelize</li>
              <li>MongoDB & Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </dl>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default Resume;
