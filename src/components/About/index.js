import React from "react";

const About = () => {
  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-three-quarters-desktop">
          <article className="message">
            <div className="message-header">
              <p className="title is-4 has-text-white">About</p>
            </div>
            <div className="message-body">
              I am Gabriel Cordova, a creative Full-stack Web Developer.
            </div>
          </article>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default About;
