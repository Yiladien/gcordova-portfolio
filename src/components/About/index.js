import React from "react";
import profilePic from "../../assets/profilepic.jpg";

const About = () => {
  return (
    <div className="section">
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-three-quarters-desktop">
          <article id="about-header" className="message">
            <figure id="profile-pic" className="image is-64x64">
              <img className="is-rounded" src={profilePic} />
            </figure>
            <div className="message-header">
              <p className="title is-4 has-text-white">About</p>
            </div>
            <div className="message-body">
              <p>
                I am <b> Gabriel Cordova</b>, a creative Full-Stack Web
                Developer who <b> loves</b> to solve interesting tasks and
                continue to learn new solutions or technology. The skillset I
                have is valuable having experience in different roles and
                applications over the years. This adds to benefit the websites
                and applications I develop.
              </p>
              <br />
              <p>
                This comes from my natural curiousity and desire to learn which
                was apparent since grade school, having reverse engineered and
                eventually <b> creating applications</b> on graphing
                calculators. Over time, I would learn how to build computers,
                install different operating systems, manage user roles,
                <b> troubleshoot software</b> issues, and more.
              </p>
              <br />
              <p>
                Working in a financial institution for 17 years, I have become
                proficient in Microsoft Office applications, especially creating
                Microsoft Excel templates with advanced formulas and
                <b> coding</b> VBA macros to help with repetitive tasks, data
                analysis,<b> data manipulation</b>, and data validation.
                Additionally, I created reports writing
                <b> advanced SQL queries</b>. These skills help me understand
                the perspective of the user for the front-end design, and how to
                store, manage, and<b> query the back-end</b>.
              </p>
              <br />
              <p>
                I have many skills and continue to learn new ones that add to a
                well-rounded software developer who loves a challenges to solve
                interesting tasks.
              </p>
            </div>
          </article>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default About;
