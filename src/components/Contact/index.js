import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import {
  faEnvelope,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [isInputError, setIsInputError] = useState({
    email: { error: false, errorMessage: "" },
    name: { error: false, errorMessage: "" },
    message: { error: false, errorMessage: "" },
  });

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setIsInputError({
          ...isInputError,
          email: { error: true, errorMessage: "Your email is invalid." },
        });
        console.log(
          "isInputError.message.errorMessage:",
          isInputError.email.errorMessage
        );
      } else {
        if (!e.target.value.length) {
          setIsInputError({
            ...isInputError,
            email: { error: true, errorMessage: "Email is required." },
          });
          console.log(
            "isInputError.message.errorMessage:",
            isInputError.email.errorMessage
          );
        } else {
          setIsInputError({
            ...isInputError,
            email: { error: false, errorMessage: "" },
          });
        }
      }
    }

    if (e.target.name === "name") {
      if (!e.target.value.length) {
        setIsInputError({
          ...isInputError,
          name: { error: true, errorMessage: "Name is required." },
        });
        console.log(
          "isInputError.message.errorMessage:",
          isInputError.name.errorMessage
        );
      } else {
        setIsInputError({
          ...isInputError,
          name: { error: false, errorMessage: "" },
        });
      }
    }

    if (e.target.name === "message") {
      if (!e.target.value.length) {
        setIsInputError({
          ...isInputError,
          message: { error: true, errorMessage: "Message is required." },
        });
        console.log(
          "isInputError.message.errorMessage:",
          isInputError.message.errorMessage
        );
      } else {
        setIsInputError({
          ...isInputError,
          message: { error: false, errorMessage: "" },
        });
      }
    }

    if (
      !isInputError.email.error &&
      !isInputError.name.error &&
      !isInputError.message.error
    ) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-half-desktop ">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label id="name-input" className="label has-text-white">
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  defaultValue={name}
                  onBlur={handleChange}
                  placeholder="Please enter your name"
                  name="name"
                />
              </div>
              {isInputError.name.error && (
                <p className="help is-danger">
                  {isInputError.name.errorMessage}
                </p>
              )}
            </div>

            <div className="field">
              <label id="email-input" className="label has-text-white">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue={email}
                  name="email"
                  onBlur={handleChange}
                ></input>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {isInputError.email.error && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </span>
                )}
              </div>
              {isInputError.email.error && (
                <p className="help is-danger">
                  {isInputError.email.errorMessage}
                </p>
              )}
            </div>

            <div className="field">
              <label className="label has-text-white">Message</label>
              <div className="control">
                <textarea
                  id="message-input"
                  className="textarea"
                  placeholder="Please provide a message"
                  defaultValue={message}
                  onBlur={handleChange}
                  rows="5"
                  name="message"
                />
              </div>
              {isInputError.message.error && (
                <p className="help is-danger">
                  {isInputError.message.errorMessage}
                </p>
              )}
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-black" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default Contact;
