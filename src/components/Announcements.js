import React from "react";

const Announcements = () => {
  return (
    <section id="annouoncements" className="home_section">
      <div className="announcements-text">
        <h1>Announcements</h1>
      </div>
      <div className="announcements_cards">
        <div className="card">
          <div className="card_image">
            <img src="junior_training.JPG"></img>
            <div>
              <h2>High performance summer camp</h2>
              <p className="para">
                High performance summer camp at Padukone Dravid Centre for
                Sports Excellence.
              </p>
            </div>
            <div className="ann-button">
              <a>Register Now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image">
            <img src="junior_training.JPG"></img>
            <div>
            <h2>Badminton Summer camp</h2>
            <p className="para">The registration are open for the summer camps.</p>
            </div>
            <div className="ann-button">
              <a>Register Now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image">
            <img src="junior_training.JPG"></img>
            <div>
            <h2>
              Victor is now the official equipment sponsor for Padukone Sports
              Management
            </h2>
            <p className="para">High performance.</p>
            </div>
            <div className="ann-button">
              <a>Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
