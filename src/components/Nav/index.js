import React from "react";
import logo from "../../assets/small/gc-logo-0.5x.png";

function Nav(props) {
  const { currentPage, setCurrentPage } = props;

  console.log("1. ", currentPage);

  return (
    <div id="nav-header">
      <nav className="level is-mobile py-2">
        <p className="level-item"></p>
        <p
          className={`level-item has-text-centered mx-2 ${
            currentPage === "about" && "navActive"
          }`}
        >
          <a
            className="has-text-white"
            href="#about"
            onClick={() => setCurrentPage("about")}
          >
            About
          </a>
        </p>
        <p
          className={`level-item has-text-centered mx-2 ${
            currentPage === "portfolio" && "navActive"
          }`}
        >
          <a
            className="has-text-white"
            href="#portfolio"
            onClick={() => setCurrentPage("portfolio")}
          >
            Portfolio
          </a>
        </p>
        <div className="level-item has-text-centered mx-2">
          <a href="#about" onClick={() => setCurrentPage("about")}>
            <figure className="image is-64x64">
              <img src={logo} alt="" height="50"></img>
            </figure>
          </a>
        </div>
        <p
          className={`level-item has-text-centered mx-2 ${
            currentPage === "resume" && "navActive"
          }`}
        >
          <a
            className="has-text-white"
            href="#resume"
            onClick={() => setCurrentPage("resume")}
          >
            Resume
          </a>
        </p>
        <p
          className={`level-item has-text-centered mx-2 ${
            currentPage === "contact" && "navActive"
          }`}
        >
          <a
            className="has-text-white"
            href="#contact"
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </a>
        </p>
        <p className="level-item"></p>
      </nav>
    </div>
  );
}

export default Nav;
