import React, { useState } from "react";
import photo1 from "../../assets/0.jpg";
import photo3 from "../../assets/3.jpg";

const Portfolio = () => {
  const [photos] = useState([
    {
      name: "Password Generator",
      technology: ["HTML", "CSS", "Javascript"],
      ghLink: "https://github.com/Yiladien/Password_Generator",
      image: "0.jpg",
    },
    {
      name: "E-commerce Backend",
      technology: ["MySQL", "Sequelize", "REST API", "Javascript"],
      ghLink: "https://github.com/Yiladien/e-commerce-backend",
      image: "1.jpg",
    },
    {
      name: "README Generator",
      technology: ["Node.js", "Inquirer", "Javascript"],
      ghLink: "https://github.com/Yiladien/readme-generator",
      image: "2.jpg",
    },
    {
      name: "Team Profile Generator",
      technology: ["Node.js", "Inquirer", "Jest", "Javascript"],
      ghLink: "https://github.com/Yiladien/team-profile-generator",
      image: "3.jpg",
    },
    {
      name: "Cyber Jam Trivia",
      technology: ["HTML", "CSS", "Bulma", "Javascript"],
      ghLink: "https://github.com/ConnieMarie/cyber-jam-trivia",
      image: "4.jpg",
    },
    {
      name: "Just Another Text Editor",
      technology: [
        "PWA",
        "Node.js",
        "Express",
        "babel",
        "webpack",
        "workbox",
        "IndexedDb",
      ],
      ghLink: "https://github.com/ConnieMarie/cyber-jam-trivia",
      image: "6.jpg",
    },
    {
      name: "Time 2 Work",
      technology: [
        "HTML",
        "CSS",
        "Bulma",
        "Javascript",
        "Node.js",
        "Handlebars",
        "Sequelize",
        "MySQL",
        "",
      ],
      ghLink: "https://github.com/ConnieMarie/cyber-jam-trivia",
      image: "4.jpg",
    },
    {
      name: "Social Media API",
      technology: ["Mongoose", "MongoDB", "REST API", "Node.js", "Javascript"],
      ghLink: "https://github.com/Yiladien/social-network-API",
      image: "7.jpg",
    },
  ]);

  return (
    <div>
      {!(i % 2 === 0) && <div className="tile is-ancestor"></div>}

      <div className="tile is-parent">
        <div className="tile is-child box">
          <figure className="image is-4by3">
            <img src={photo3}></img>
          </figure>
          <p className="title">One</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        {!(i % 2 === 0) && <div></div>}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className="image is-4by3">
              <img src={photo3}></img>
            </figure>
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
