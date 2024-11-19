import React from "react";

const About = () => {
    return(
        <section className="home_section" id="about">
            <div className="announcements-text">
            <h1>About Alight</h1>
            </div>

            <div className="about-image-text">
                <div className="about-image">
                    <img src="about.jpg"></img>
                </div>

                <div className="about-text">
                    <h2>Advisory Research with Custom Solutions</h2>
                    <p>
                    Alight fosters the players to become future champions.
                    Alight was founded in 2004 by Pullela Gopichand, All England Open Badminton Champion. The academy is recognized by the Ministry of Sports, Sports Authority of India (SAI), and the Badminton Association of India (BAI).
                    The academy has trained several worlds’ leading badminton players such as Saina Nehwal P. V. Sindhu, Srikanth Kidambi, Parupalli Kashyap, H.S. Prannoy, Sai Praneeth, Sameer Verma and many others. 
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;