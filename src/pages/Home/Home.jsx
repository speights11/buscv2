import React, { useEffect } from "react";
import Carousel from "components/Carousel";
// import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
// import {
//   PlyrLayout,
//   plyrLayoutIcons,
// } from "@vidstack/react/player/layouts/plyr";
import gina from "assets/images/gina-intro2.png";
// import skin from "assets/images/video-skin-1.png";
import "App.scss";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

const Home = () => {
  useEffect(() => {
    sessionStorage.setItem("currentPage", "0");

    try {
      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitHome", {
        event_category: "Pages",
        event_label: "Visit Home Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="home-content">
        <div className="home-image-frame">
          <img src={gina} alt="Gina at 1st annual art show" />
        </div>
        <br />
        <div className="carousel-container">
          <p id="carousel-header">
            See Gallery for Paintings and photographs available in a wide array
            of options, such as:
          </p>
          <Carousel />
        </div>
        <br />
        <hr />
        {/* <div className="intro">
          <img src={skin} alt="Image of Reggie S. as a child" />
           <MediaPlayer
            title="The room where it happens"
            src="/GinasProcessOne.mp4"
            playsInline
          >
            <MediaProvider>
              <Poster
                className="vds-poster"
                src={skin}
                alt="Picture of Reggie S. as a child with giant paint brushes as background."
              />
            </MediaProvider>
            <PlyrLayout icons={plyrLayoutIcons} />
          </MediaPlayer> 
        </div> */}
        <br />
      </div>
    </>
  );
};

export default Home;

// https://www.vidstack.io/
// https://tailwindcss.com/
