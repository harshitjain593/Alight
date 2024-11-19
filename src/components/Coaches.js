import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Coaches = () => {
  const coaches = [
    { name: "Coach John", image: "logo.JPG" },
    { name: "Coach Emma", image: "logo.JPG" },
    { name: "Coach Michael", image: "logo.JPG" },
    { name: "Coach Sophia", image: "logo.JPG" },
  ];

  const sliderRef = useRef(null);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
  };

  // Custom arrow handlers
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="home_section" id="coaches" style={{ padding: "40px 20px" }}>
      <div className="training-text" style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2.5em", textAlign: "center", marginBottom: "20px" }}>Coaches</h1>
        <p className="para" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Coaches are the heart of Padukone Sports Management. Our coaches are handpicked and comprehensively trained
          in coaching methods and sensitivity. They undergo continuous training and assessment to stay updated with the
          latest coaching techniques.
        </p>
      </div>

      <div className="coaches" style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Head Coach Section */}
        <div className="head_coach" style={{ width: "30%" }}>
          <img src="head_coach.jpg" alt="Head Coach" style={{ width: "100%", borderRadius: "10px" }} />
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>Head Coach</h2>
        </div>

        {/* Coaches Carousel Section */}
        <div className="carousel-container" style={{ marginTop: "20px", width: "65%" }}>
          <Slider {...settings} ref={sliderRef}>
            {coaches.map((coach, index) => (
              <div key={index} className="coach-card" style={{ padding: "10px" }}>
                <img
                  src={coach.image}
                  alt={coach.name}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>{coach.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Arrow Buttons */}
      <button onClick={handlePrev} className="custom-prev">Previous</button>
      <button onClick={handleNext} className="custom-next">Next</button>
    </section>
  );
};

export default Coaches;
