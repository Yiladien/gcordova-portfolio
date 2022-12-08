import React from "react";
import photo1 from "../../assets/0.jpg";
import photo2 from "../../assets/1.jpg";

const Portfolio = () => {
  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-three-quarters-desktop">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <figure className="image is-4by3">
                  <img src={photo1}></img>
                </figure>
                <p className="title">One</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <figure className="image is-4by3">
                  <img src={photo2}></img>
                </figure>
                <p className="title">One</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
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
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
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
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
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
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Portfolio;
