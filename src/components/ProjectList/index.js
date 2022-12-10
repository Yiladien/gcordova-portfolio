import React from "react";

const ProjectList = () => {
  const projectArr = [
    {
      name: "Password Generator",
      technology: [
        {
          theme: "Code",
          app: "HTML",
        },
        {
          theme: "Code",
          app: "CSS",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/Yiladien/Password_Generator",
      application: "https://yiladien.github.io/Password_Generator/",
      image: "0.jpg",
    },
    {
      name: "E-commerce Backend",
      technology: [
        {
          theme: "Db",
          app: "MySQL",
        },
        {
          theme: "Node",
          app: "Sequelize",
        },
        {
          theme: "Process",
          app: "REST API",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/Yiladien/e-commerce-backend",
      application: "",
      image: "1.jpg",
    },
    {
      name: "README Generator",
      technology: [
        {
          theme: "Node",
          app: "Inquirer",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/Yiladien/readme-generator",
      application: "",
      image: "2.jpg",
    },
    {
      name: "Team Profile Generator",
      technology: [
        {
          theme: "Node",
          app: "Inquirer",
        },
        {
          theme: "Node",
          app: "Jest",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/Yiladien/team-profile-generator",
      application: "",
      image: "3.jpg",
    },
    {
      name: "Cyber Jam Trivia",
      technology: [
        {
          theme: "Framework",
          app: "Bulma",
        },
        {
          theme: "Code",
          app: "HTML",
        },
        {
          theme: "Code",
          app: "CSS",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/ConnieMarie/cyber-jam-trivia",
      application: "https://conniemarie.github.io/trivia/",
      image: "4.jpg",
    },
    {
      name: "Just Another Text Editor",
      technology: [
        {
          theme: "Process",
          app: "PWA",
        },
        {
          theme: "Node",
          app: "Express",
        },
        {
          theme: "Node",
          app: "babel",
        },
        {
          theme: "Node",
          app: "webpack",
        },
        {
          theme: "Node",
          app: "workbox",
        },
        {
          theme: "Db",
          app: "IndexedDb",
        },
      ],
      ghLink: "https://github.com/Yiladien/text-editor-pwa",
      application: "https://fast-garden-84807.herokuapp.com/",
      image: "5.jpg",
    },
    {
      name: "Time 2 Work",
      technology: [
        {
          theme: "Code",
          app: "HTML",
        },
        {
          theme: "Code",
          app: "CSS",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
        {
          theme: "Framework",
          app: "Bulma",
        },
        {
          theme: "Node",
          app: "Handlebars",
        },
        {
          theme: "Node",
          app: "Sequelize",
        },
        {
          theme: "Db",
          app: "MySQL",
        },
      ],
      ghLink: "https://github.com/bsolis6878/time-2-work",
      application: "https://protected-taiga-76694.herokuapp.com/",
      image: "6.jpg",
    },
    {
      name: "Social Media API",
      technology: [
        {
          theme: "Db",
          app: "Mongoose",
        },
        {
          theme: "Node",
          app: "MongoDB",
        },
        {
          theme: "Process",
          app: "REST API",
        },
        {
          theme: "Code",
          app: "Javascript",
        },
      ],
      ghLink: "https://github.com/Yiladien/social-network-API",
      image: "7.jpg",
    },
  ];

  return (
    <>
      {projectArr.map((project, i) => (
        <div className="column is-5-desktop box has-text-centered">
          <p className="title is-5 has-background-grey-lighter		p-1">
            {project.name}
          </p>
          <div className="mb-3">
            <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
              <figure className="image is-4by3">
                <img
                  src={require(`../../assets/${project.image}`)}
                  alt={project.name}
                  key={i}
                />
              </figure>
            </a>
          </div>
          <div className="field is-grouped is-grouped-multiline mb-2">
            {project.technology.map((tech) => (
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">{tech.theme}</span>
                  <span className="tag is-info">{tech.app}</span>
                </div>
              </div>
            ))}
          </div>
          {project.application && (
            <div className="is-flex is-justify-content-center">
              <a
                className="button is-dark is-small"
                href={project.application}
                target="_blank"
                rel="noopener noreferrer"
              >
                Application Link
              </a>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProjectList;
