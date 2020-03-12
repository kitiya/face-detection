import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import "./homepage.styles.scss";
import Navigation from "../../components/navigation/navigation.component";
import ImageLinkForm from "../../components/image-link-form/image-link-form.component";
import Rank from "../../components/rank/rank.component";
import FaceRecognition from "../../components/face-recognition/face-recognition.component";
import SignIn from "../../components/sign-in/sign-in.component";
import Register from "../../components/register/register.component";

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
  const defaultUrl =
    "https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg";

  const [inputUrl, setInputUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(defaultUrl);
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: ""
  });

  const onRouteChange = route => {
    setRoute(route);
  };

  const loadUser = userData => {
    setUser({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      entries: userData.entries,
      joined: userData.joined
    });
  };

  // console.log(user);

  const calculateFaceLocation = response => {
    // console.log(response);
    const faceData =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height);
    // console.log(faceData.left_col);

    return {
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      rightCol: width - faceData.right_col * width,
      bottomRow: height - faceData.bottom_row * height
    };
  };

  const displayFaceBox = box => {
    // console.log(box);
    setBox(box);
  };

  const onInputChange = event => {
    setInputUrl(event.target.value);
  };

  const onPictureSubmit = () => {
    console.log("picture submitted", user);
    setImageUrl(inputUrl);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, inputUrl)
      .then(response => {
        if (response) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => setUser(Object.assign(user, { entries: count })));
          // .then(count => (user.entries = count));
        }

        displayFaceBox(calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="home-page">
      {/* <Particles className="particles" params={particlesOptions} /> */}

      <Navigation onRouteChange={() => onRouteChange("signin")} />
      {route === "signin" ? (
        <>
          <SignIn
            onRouteChange={() => onRouteChange("home")}
            loadUser={loadUser}
          />
          <Register
            onRouteChange={() => onRouteChange("home")}
            loadUser={loadUser}
          />
        </>
      ) : (
        <>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onPictureSubmit={onPictureSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </>
      )}
    </div>
  );
};

export default HomePage;
