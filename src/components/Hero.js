import React from "react";

const Hero =()=>{
    return(
<section id="hero" className="home_section" style={{ padding: "50px" }}>
          <div className="hero-inner">
            <div className="hero-text">
              <h1>Badminton for All</h1>
              <p className="para">
                Start your Badminton journey today. Choose from our wide range
                of Badminton Coaching programs at our multiple locations across
                India
              </p>
              <div className="hero-button">
                <a>Enroll Now</a>
              </div>
            </div>

            <div
              style={{
                backgroundImage: "url('banner-image.webp')",
              }}
              className="hero-image"
            ></div>
          </div>
        </section>
    );
}

export default Hero;