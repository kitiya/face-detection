import React, { useState } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import "./homepage.styles.scss";
import Navigation from "../../components/navigation/navigation.component";
import ImageLinkForm from "../../components/image-link-form/image-link-form.component";
import Rank from "../../components/rank/rank.component";
import FaceRecognition from "../../components/face-recognition/face-recognition.component";

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY
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
    "https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg"
  );
  const [box, setBox] = useState({});

  const calculateFaceLocation = response => {
    console.log(response);
    const faceData =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    console.log(faceData.left_col);

    return {
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      rightCol: width - faceData.right_col * width,
      bottomRow: height - faceData.bottom_row * height
    };
  };

  const displayFaceBox = box => {
    console.log(box);
    setBox(box);
  };

  const onInputChange = event => {
    setInputUrl(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(inputUrl);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, inputUrl)
      .then(response => displayFaceBox(calculateFaceLocation(response)))
      .catch(err => console.log(err));
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
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
};

export default HomePage;
