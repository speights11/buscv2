import React, { useEffect } from "react";
import Carousel from "components/Carousel";
import { Grid, Box, Typography } from "@mui/material";
import Image from "mui-image";
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
        <Grid
          container
          size={12}
          sx={{ p: 2 }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Grid
            size={12}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Box sx={{ width: "85%" }}>
              <Image src={gina} alt="Gina at 1st annual art show" />
            </Box>
          </Grid>
        </Grid>
        <Grid container size={12} sx={{ p: 2 }}>
          <Grid size={12} sx={{ py: 2, textAlign: "center", marginBottom: 5 }}>
            <Typography variant="h5" sx={{ fontSize: "1.9vmax" }}>
              Browse our Gallery for Paintings and Photographs available in a
              wide array of options.
            </Typography>
          </Grid>

          <Grid size={12} sx={{ marginBottom: 10 }}>
            <Box
              sx={{ width: "100%" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Carousel />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;

// https://www.vidstack.io/
// https://tailwindcss.com/
