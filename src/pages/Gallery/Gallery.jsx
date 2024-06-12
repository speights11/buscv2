import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

import "../../App.scss";

const Gallery = () => {
  const color = "#0000FF";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sessionStorage.setItem("currentPage", "/gallery");
    sessionStorage.setItem("currentPage", "1");

    try {
      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitGallery", {
        event_category: "Pages",
        event_label: "Visit Gallery Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className={`${loading ? "spinner" : "hidden"}`}>
        <RingLoader
          color={color}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h2>One Moment Please...</h2>
      </div>
      <div className={`${loading ? "hidden" : "iframe-container"}`}>
        <iframe
          src="https://www.pictorem.com/gallery/Reggie.S"
          allowfullscreen
          width={"100%"}
          height={"100%"}
          onLoad={() => setLoading(false)}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
        ></iframe>
      </div>
    </>
  );
};

export default Gallery;
