import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import "../pages/home.css";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Announcements from "../components/Announcements";
import About from "../components/About";
import Map from "../components/Map";
import Coaches from "../components/Coaches";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="Main">
        <Hero />
        <Announcements />
        <About />
        <Cards />
        <Map />
        <Coaches />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
