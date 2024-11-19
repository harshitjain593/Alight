import React from "react";

const Cards = () =>{
    return(
        <section
          id="training-program"
          className="home_section"
          style={{ padding: "50px" }}
        >
          <div className="training-text">
          <h1>Badminton Training Programs</h1>
          <p className="para">Enrol for exhilarating on-court or online badminton training sessions curated by the legendary Prakash Padukone.</p>
          </div>

          <div className="training-cards">
              <div className="card">
                
                    <img src="junior_training.jpg"></img>
                    <h5>Badminton Coaching Program</h5>
                    <p className="para">Padukone sports management has a program to help you reach your goals. If you are looking for something fully customized and personal, get in touch with us</p>
              </div>
              <div className="card">
              <img src="junior_training.jpg"></img>
                    <h5>Badminton Coaching Program</h5>
                    <p className="para">Padukone sports management has a program to help you reach your goals. If you are looking for something fully customized and personal, get in touch with us</p>
              </div>
              <div className="card">
                <img src="junior_training.jpg"></img>
                    <h5>Badminton Coaching Program</h5>
                    <p className="para">Padukone sports management has a program to help you reach your goals. If you are looking for something fully customized and personal, get in touch with us</p>
              </div>
          </div>
        </section>
    );
}

export default Cards;