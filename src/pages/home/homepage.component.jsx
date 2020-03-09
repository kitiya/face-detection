import React from "react";
import Particles from "react-particles-js";

import "./homepage.styles.scss";
import Navigation from "../../components/navigation/navigation.component";
import ImageLinkForm from "../../components/image-link-form/image-link-form.component";
import Rank from "../../components/rank/rank.component";

const HomePage = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 300
        }
      }
    }
  };

  return (
    <div className="home-page">
      <Particles className="particles" params={particlesOptions} />

      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
};

export default HomePage;
