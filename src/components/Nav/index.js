import React from "react";
import logo from "../../assets/small/gc-logo-0.5x.png";

const Nav = () => {
  return (
    <div>
      <nav className="level is-mobile py-2">
        <p className="level-item"></p>
        <p className="level-item has-text-centered">
          <a className="has-text-white">About</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="has-text-white">Portfolio</a>
        </p>
        <div className="level-item has-text-centered">
          <figure className="image is-64x64">
            <img src={logo} alt="" height="50"></img>
          </figure>
        </div>
        <p className="level-item has-text-centered">
          <a className="has-text-white">Resume</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="has-text-white">Contact</a>
        </p>
        <p className="level-item"></p>
      </nav>
    </div>
  );
};

export default Nav;
