import React, { useState } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import "./homepage.styles.scss";
import Navigation from "../../components/navigation/navigation.component";
import ImageLinkForm from "../../components/image-link-form/image-link-form.component";
import Rank from "../../components/rank/rank.component";
import FaceRecognition from "../../components/face-recognition/face-recognition.component";

const app = new Clarifai.App({
  apiKey: ""
});

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
const HomePage = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647_960_720.jpg"
  );

  const onInputChange = event => {
    setInputUrl(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(inputUrl);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, inputUrl).then(
      function(response) {
        console.log(response);
        const faceInfo =
          response.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(faceInfo);
      },
      function(err) {
        // there was an error
      }
    );
  };

  return (
    <div className="home-page">
      {/* <Particles className="particles" params={particlesOptions} /> */}

      <Navigation />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
};

export default HomePage;
