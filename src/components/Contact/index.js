import React from "react";
import {
  faEnvelope,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-three-quarters-desktop">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Please enter your name"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              ></input>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-black">Submit</button>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Contact;
