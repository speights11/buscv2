import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import Image from "mui-image";
import event from "assets/images/Events/WineDownWithArt2.png";
import collage from "assets/images/Events/WineDownWithArtCollage.png";
import "../../App.scss";
import { Typography } from "@mui/material";
// import { Typography } from "@mui/material";

const UpcomingEvents = () => {
  // const hdrFontSize = {
  //   xs: "4.5vw",
  //   sm: "4.5vw",
  //   md: "4.5vw",
  //   lg: "4.5vw",
  //   xl: "4.5vw",
  // };

  useEffect(() => {
    try {
      sessionStorage.setItem("currentPage", "2");

      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitUpcomingEvents", {
        event_category: "Pages",
        event_label: "Visit Upcoming Events Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Grid container size={12}>
      <div className="home-content">
        <Box
          className="upcoming-content"
          sx={{ my: 5, mx: "auto", width: "90%" }}
        >
          <Grid size={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3">
                A great day of wine, food and art.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            size={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "2vmin",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Image
                sx={{ border: 2, borderRadius: { xs: 3, md: 6, xl: 8 } }}
                src={event}
                width="25vw"
              />
            </Box>
            <Box sx={{ p: 2 }}>
              <Image
                sx={{ border: 2, borderRadius: { xs: 3, md: 6, xl: 8 } }}
                src={collage}
                width="45vw"
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <Box sx={{ textAlign: "center", pb: 5 }}>
              <Typography variant="h3">Stay Tuned... More to Come</Typography>
            </Box>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};

export default UpcomingEvents;
